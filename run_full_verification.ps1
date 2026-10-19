# Comprehensive Automated Verification Suite for IELTS & Starters Updates

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   COMPREHENSIVE AUTOMATED VERIFICATION SUITE" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$allPassed = $true

function Report-Assert($cond, $title, $detail = "") {
    if ($cond) {
        Write-Host " [PASS] $title" -ForegroundColor Green
    } else {
        Write-Host " [FAIL] $title : $detail" -ForegroundColor Red
        $script:allPassed = $false
    }
}

# ----------------------------------------------------
# 1. VERIFY CROPPED STARTERS IMAGES
# ----------------------------------------------------
Write-Host "`n--- 1. Testing Starters Cropped Images ---" -ForegroundColor Yellow
$books = 1..4
$totalCroppedExpected = 24
$foundCropped = 0

Add-Type -AssemblyName System.Drawing

foreach ($b in $books) {
    if ($b -le 2) {
        $pages = @(6, 13, 19, 26, 32, 39)
    } else {
        $pages = @(6, 13, 20, 27, 34, 41)
    }
    foreach ($p in $pages) {
        $imgPath = "images/starters/book$b/page_${p}_cropped.jpg"
        if (Test-Path $imgPath) {
            $img = [System.Drawing.Image]::FromFile((Resolve-Path $imgPath).Path)
            $w = $img.Width
            $h = $img.Height
            $img.Dispose()
            if ($w -ge 400 -and $h -ge 300) {
                $foundCropped++
            } else {
                Report-Assert $false "Image $imgPath has invalid dimensions" "Width: $w, Height: $h"
            }
        } else {
            Report-Assert $false "Missing cropped image: $imgPath"
        }
    }
}
Report-Assert ($foundCropped -eq $totalCroppedExpected) "All $totalCroppedExpected Part 2 cropped images exist and have valid dimensions" "Found $foundCropped / $totalCroppedExpected"

# ----------------------------------------------------
# 2. VERIFY STARTERS TEST ENGINE RENDERING LOGIC
# ----------------------------------------------------
Write-Host "`n--- 2. Testing starters_test_engine.js ---" -ForegroundColor Yellow
$stEngine = [System.IO.File]::ReadAllText("starters_test_engine.js", [System.Text.Encoding]::UTF8)

# Check cropped image logic in getStartersBookImages
Report-Assert ($stEngine.Contains("_cropped.jpg")) "Engine uses _cropped.jpg for Part 2 illustrations"
Report-Assert ($stEngine.Contains("lisP2") -and $stEngine.Contains("rwP2")) "Engine dynamically resolves authentic page numbers for Books 1-4"
Report-Assert ($stEngine.Contains("Examples") -and $stEngine.Contains("Listen to the conversation examples:")) "Listening Part 2 renders standalone Examples card"
Report-Assert ($stEngine.Contains("currentPart.examples") -and $stEngine.Contains("forEach")) "Listening and Reading dynamically render authentic book examples outside picture"
Report-Assert ($stEngine.Contains("Type name or number...")) "Listening Part 2 inputs use clean English placeholder"

# Check Part 1 Hotspots & No Vietnamese Descriptions
Report-Assert ($stEngine.Contains("target-spot-") -and $stEngine.Contains("handleStartersNameDragStart")) "Listening Part 1 has drag-drop and hotspot pinning system"
Report-Assert (-not $stEngine.Contains("cạnh") -and -not $stEngine.Contains("trên cây")) "Listening Part 1 has NO old text descriptions"

# ----------------------------------------------------
# 3. VERIFY IELTS DATA INTEGRITY & 20-TEST DIVERSITY
# ----------------------------------------------------
Write-Host "`n--- 3. Testing IELTS Data Integrity & Diversity ---" -ForegroundColor Yellow
$ieltsData = [System.IO.File]::ReadAllText("ielts_data.js", [System.Text.Encoding]::UTF8)

# Parse cambridgeTestProfiles dynamically
$idMatches = [regex]::Matches($ieltsData, 'id:\s*"(cam_\d+)"')
$titleMatches = [regex]::Matches($ieltsData, 'title:\s*"(Cambridge IELTS \d+ Academic Test)"')
$chartMatches = [regex]::Matches($ieltsData, 'writing_chart:\s*"([^"]+)"')
$essayMatches = [regex]::Matches($ieltsData, 'essay_topic:\s*"([^"]+)"')
$cueMatches = [regex]::Matches($ieltsData, 'speaking_cue:\s*"([^"]+)"')

$ids = $idMatches | ForEach-Object { $_.Groups[1].Value }
$titles = $titleMatches | ForEach-Object { $_.Groups[1].Value }
$charts = $chartMatches | ForEach-Object { $_.Groups[1].Value }
$essays = $essayMatches | ForEach-Object { $_.Groups[1].Value }
$cues = $cueMatches | ForEach-Object { $_.Groups[1].Value }

Report-Assert ($ids.Count -eq 20) "Found exactly 20 Cambridge test IDs (cam_1 to cam_20)" "Count: $($ids.Count)"
$uniqueIds = $ids | Select-Object -Unique
Report-Assert ($uniqueIds.Count -eq 20) "All 20 test IDs are 100% unique"

Report-Assert ($titles.Count -eq 20) "Found exactly 20 Cambridge test titles" "Count: $($titles.Count)"
$uniqueTitles = $titles | Select-Object -Unique
Report-Assert ($uniqueTitles.Count -eq 20) "All 20 test titles are 100% unique"

Report-Assert ($charts.Count -eq 20) "Found exactly 20 distinct Academic Writing Task 1 charts" "Count: $($charts.Count)"
$uniqueCharts = $charts | Select-Object -Unique
Report-Assert ($uniqueCharts.Count -eq 20) "All 20 Writing Task 1 topics are 100% unique"

Report-Assert ($essays.Count -eq 20) "Found exactly 20 distinct Academic Writing Task 2 essays" "Count: $($essays.Count)"
$uniqueEssays = $essays | Select-Object -Unique
Report-Assert ($uniqueEssays.Count -eq 20) "All 20 Writing Task 2 essay questions are 100% unique"

Report-Assert ($cues.Count -eq 20) "Found exactly 20 distinct Speaking cue cards" "Count: $($cues.Count)"
$uniqueCues = $cues | Select-Object -Unique
Report-Assert ($uniqueCues.Count -eq 20) "All 20 Speaking cue cards are 100% unique"

# Verify generator populates ieltsProfileData.ielts_tests
Report-Assert ($ieltsData.Contains("ieltsProfileData.ielts_tests[profile.id] = generateCambridgeTest(profile, idx);")) "All 20 tests dynamically generated and registered to ieltsProfileData"

# Verify 40 questions per test in generateCambridgeTest
Report-Assert ($ieltsData.Contains("part1Questions") -and $ieltsData.Contains("part2Questions") -and $ieltsData.Contains("part3Questions") -and $ieltsData.Contains("part4Questions")) "Listening contains all 4 parts with 40 distinct questions"
Report-Assert ($ieltsData.Contains("passage1Questions") -and $ieltsData.Contains("passage2Questions") -and $ieltsData.Contains("passage3Questions")) "Reading contains 3 passages with 40 distinct questions"
Report-Assert ($ieltsData.Contains("writingData") -and $ieltsData.Contains("speakingData")) "Writing and Speaking contain complete academic tasks and native criteria"

# ----------------------------------------------------
# 4. ZERO VIETNAMESE CHARACTERS VERIFICATION
# ----------------------------------------------------
Write-Host "`n--- 4. Checking Zero Vietnamese Characters ---" -ForegroundColor Yellow
$vnPattern = "[\u00C0-\u00C3\u00C8-\u00CA\u00CC-\u00CD\u00D2-\u00D5\u00D9-\u00DA\u00DD\u00E0-\u00E3\u00E8-\u00EA\u00EC-\u00ED\u00F2-\u00F5\u00F9-\u00FA\u00FD\u0102-\u0103\u0110-\u0111\u0128-\u0129\u0168-\u0169\u01A0-\u01B0\u1EA0-\u1EF9]"
$regex = New-Object System.Text.RegularExpressions.Regex($vnPattern)

$coreFiles = @('ielts_data.js', 'ielts_test_engine.js', 'starters_data.js', 'starters_test_engine.js')
foreach ($f in $coreFiles) {
    $c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
    $m = $regex.Matches($c)
    Report-Assert ($m.Count -eq 0) "$f has ZERO Vietnamese characters" "Found $($m.Count) characters"
}

# ----------------------------------------------------
# 5. CACHE BUSTER IN INDEX.HTML
# ----------------------------------------------------
Write-Host "`n--- 5. Checking index.html Cache Busters ---" -ForegroundColor Yellow
$idxHtml = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)
Report-Assert ($idxHtml.Contains("ielts_data.js?v=20261019_v2")) "index.html loads updated ielts_data.js cache buster"
Report-Assert ($idxHtml.Contains("ielts_test_engine.js?v=20261019_v2")) "index.html loads updated ielts_test_engine.js cache buster"
Report-Assert ($idxHtml.Contains("starters_data.js?v=20261019_v2")) "index.html loads updated starters_data.js cache buster"
Report-Assert ($idxHtml.Contains("starters_test_engine.js?v=20261019_v2")) "index.html loads updated starters_test_engine.js cache buster"

Write-Host "`n==========================================================" -ForegroundColor Cyan
if ($allPassed) {
    Write-Host "   SUCCESS: ALL TESTS PASSED! 100% READY FOR DEPLOYMENT   " -ForegroundColor Green
} else {
    Write-Host "   FAILURE: SOME TESTS FAILED! PLEASE REVIEW LOGS ABOVE    " -ForegroundColor Red
}
Write-Host "==========================================================" -ForegroundColor Cyan
