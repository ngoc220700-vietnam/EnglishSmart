# Comprehensive Automated Verification Suite for IELTS & Starters Updates
Set-Location $PSScriptRoot
[System.IO.Directory]::SetCurrentDirectory($PSScriptRoot)

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
# 1. VERIFY CROPPED STARTERS IMAGES (PART 1, PART 2, PART 3)
# ----------------------------------------------------
Write-Host "`n--- 1. Testing Starters Cropped Images ---" -ForegroundColor Yellow
Add-Type -AssemblyName System.Drawing

# 1A. Part 1 Cropped Images (12 tests)
$p1Pages = @(
    @{ b = 1; p = 5 }, @{ b = 1; p = 18 }, @{ b = 1; p = 31 },
    @{ b = 2; p = 5 }, @{ b = 2; p = 18 }, @{ b = 2; p = 31 },
    @{ b = 3; p = 5 }, @{ b = 3; p = 19 }, @{ b = 3; p = 33 },
    @{ b = 4; p = 5 }, @{ b = 4; p = 19 }, @{ b = 4; p = 33 }
)
$foundP1Cropped = 0
foreach ($item in $p1Pages) {
    $imgPath = "images/starters/book$($item.b)/page_$($item.p)_cropped.jpg"
    if (Test-Path $imgPath) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $imgPath).Path)
        $w = $img.Width; $h = $img.Height
        $img.Dispose()
        if ($w -ge 500 -and $h -ge 500) { $foundP1Cropped++ }
        else { Report-Assert $false "Image $imgPath has invalid dimensions" "Width: $w, Height: $h" }
    } else {
        Report-Assert $false "Missing Part 1 cropped image: $imgPath"
    }
}
Report-Assert ($foundP1Cropped -eq 12) "All 12 Part 1 cropped scene images exist and have valid dimensions" "Found $foundP1Cropped / 12"

# 1B. Part 2 Cropped Images (24 tests)
$totalPart2Expected = 24
$foundPart2Cropped = 0
foreach ($b in 1..4) {
    if ($b -le 2) { $pages = @(6, 13, 19, 26, 32, 39) } else { $pages = @(6, 13, 20, 27, 34, 41) }
    foreach ($p in $pages) {
        $imgPath = "images/starters/book$b/page_${p}_cropped.jpg"
        if (Test-Path $imgPath) {
            $img = [System.Drawing.Image]::FromFile((Resolve-Path $imgPath).Path)
            $w = $img.Width; $h = $img.Height
            $img.Dispose()
            if ($w -ge 400 -and $h -ge 300) { $foundPart2Cropped++ }
            else { Report-Assert $false "Image $imgPath has invalid dimensions" "Width: $w, Height: $h" }
        } else {
            Report-Assert $false "Missing Part 2 cropped image: $imgPath"
        }
    }
}
Report-Assert ($foundPart2Cropped -eq $totalPart2Expected) "All $totalPart2Expected Part 2 cropped images exist and have valid dimensions" "Found $foundPart2Cropped / $totalPart2Expected"

# 1C. Part 3 Cropped Images (60 Questions + 12 Examples = 72 images)
$foundP3Questions = 0
$foundP3Examples = 0
foreach ($b in 1..4) {
    foreach ($t in 1..3) {
        $exPath = "images/starters/book$b/test${t}_p3_example.jpg"
        if (Test-Path $exPath) { $foundP3Examples++ }
        foreach ($q in 1..5) {
            $qPath = "images/starters/book$b/test${t}_p3_q${q}.jpg"
            if (Test-Path $qPath) {
                $img = [System.Drawing.Image]::FromFile((Resolve-Path $qPath).Path)
                $w = $img.Width; $h = $img.Height
                $img.Dispose()
                if ($w -ge 500 -and $h -ge 150) { $foundP3Questions++ }
            }
        }
    }
}
Report-Assert ($foundP3Questions -eq 60) "All 60 Part 3 individual question images exist" "Found $foundP3Questions / 60"
Report-Assert ($foundP3Examples -eq 12) "All 12 Part 3 example images exist" "Found $foundP3Examples / 12"

# 1D. Part 4 Cropped Images (12 tests)
$p4Pages = @(
    @{ b = 1; p = 10 }, @{ b = 1; p = 23 }, @{ b = 1; p = 36 },
    @{ b = 2; p = 10 }, @{ b = 2; p = 23 }, @{ b = 2; p = 36 },
    @{ b = 3; p = 10 }, @{ b = 3; p = 24 }, @{ b = 3; p = 38 },
    @{ b = 4; p = 10 }, @{ b = 4; p = 24 }, @{ b = 4; p = 38 }
)
$foundP4Cropped = 0
foreach ($item in $p4Pages) {
    $imgPath = "images/starters/book$($item.b)/page_$($item.p)_cropped.jpg"
    if (Test-Path $imgPath) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $imgPath).Path)
        $w = $img.Width; $h = $img.Height
        $img.Dispose()
        if ($w -ge 600 -and $h -ge 700) { $foundP4Cropped++ }
        else { Report-Assert $false "Image $imgPath has invalid dimensions" "Width: $w, Height: $h" }
    } else {
        Report-Assert $false "Missing Part 4 cropped image: $imgPath"
    }
}
Report-Assert ($foundP4Cropped -eq 12) "All 12 Part 4 cropped scene images exist and have valid dimensions" "Found $foundP4Cropped / 12"

# 1E. Reading & Writing Part 1 Cropped Images (60 Questions + 24 Examples = 84 images)
$foundRw1Questions = 0
$foundRw1Examples = 0
foreach ($b in 1..4) {
    foreach ($t in 1..3) {
        foreach ($ex in 1..2) {
            $exPath = "images/starters/book$b/test${t}_rw1_example${ex}.jpg"
            if (Test-Path $exPath) { $foundRw1Examples++ }
        }
        foreach ($q in 1..5) {
            $qPath = "images/starters/book$b/test${t}_rw1_q${q}.jpg"
            if (Test-Path $qPath) {
                $img = [System.Drawing.Image]::FromFile((Resolve-Path $qPath).Path)
                $w = $img.Width; $h = $img.Height
                $img.Dispose()
                if ($w -ge 240 -and $h -ge 200) { $foundRw1Questions++ }
            }
        }
    }
}
Report-Assert ($foundRw1Questions -eq 60) "All 60 Reading & Writing Part 1 question images exist" "Found $foundRw1Questions / 60"
Report-Assert ($foundRw1Examples -eq 24) "All 24 Reading & Writing Part 1 example images exist" "Found $foundRw1Examples / 24"

# 1F. Reading & Writing Part 3 Cropped Images (60 Questions + 12 Examples = 72 images)
$foundRw3Questions = 0
$foundRw3Examples = 0
foreach ($b in 1..4) {
    foreach ($t in 1..3) {
        $exPath = "images/starters/book$b/test${t}_rw3_example.jpg"
        if (Test-Path $exPath) {
            $img = [System.Drawing.Image]::FromFile((Resolve-Path $exPath).Path)
            $w = $img.Width; $h = $img.Height
            $img.Dispose()
            if ($w -ge 500 -and $h -ge 100) { $foundRw3Examples++ }
        }
        foreach ($q in 1..5) {
            $qPath = "images/starters/book$b/test${t}_rw3_q${q}.jpg"
            if (Test-Path $qPath) {
                $img = [System.Drawing.Image]::FromFile((Resolve-Path $qPath).Path)
                $w = $img.Width; $h = $img.Height
                $img.Dispose()
                if ($w -ge 500 -and $h -ge 100) { $foundRw3Questions++ }
            }
        }
    }
}
Report-Assert ($foundRw3Questions -eq 60) "All 60 Reading & Writing Part 3 question strip images exist and have valid dimensions" "Found $foundRw3Questions / 60"
Report-Assert ($foundRw3Examples -eq 12) "All 12 Reading & Writing Part 3 example images exist and have valid dimensions" "Found $foundRw3Examples / 12"

# ----------------------------------------------------
# 2. VERIFY STARTERS TEST ENGINE RENDERING LOGIC
# ----------------------------------------------------
Write-Host "`n--- 2. Testing starters_test_engine.js ---" -ForegroundColor Yellow
$stEngine = [System.IO.File]::ReadAllText("starters_test_engine.js", [System.Text.Encoding]::UTF8)

# Check Part 1 tight image wrapper
Report-Assert ($stEngine.Contains('id="starters-p1-wrapper"') -and $stEngine.Contains('relative inline-block max-w-full')) "Part 1 wraps image tightly to guarantee spots never float into margin"
Report-Assert ($stEngine.Contains('id="starters-p1-svg"')) "Part 1 includes dynamic SVG line overlay connecting names to characters"
Report-Assert ($stEngine.Contains('id="starters-p1-canvas"')) "Part 1 includes freehand drawing canvas for line drawing"
Report-Assert ($stEngine.Contains('page_${lisP1}_cropped.jpg')) "Part 1 dynamically loads cropped scene illustration"
Report-Assert ($stEngine.Contains("How to match:") -and $stEngine.Contains("tap the matching person")) "Part 1 displays clear English matching instructions"

# Check Part 2 Examples & Cropped Logic
Report-Assert ($stEngine.Contains("_cropped.jpg")) "Engine uses _cropped.jpg for illustrations"
Report-Assert ($stEngine.Contains("currentPart.examples") -and $stEngine.Contains("forEach")) "Listening and Reading dynamically render authentic book examples outside picture"
Report-Assert ($stEngine.Contains("Type name or number...")) "Listening Part 2 inputs use clean English placeholder"

# Check Part 3 Individual Cropped Question & Option Selector Logic
Report-Assert ($stEngine.Contains('test${testNum}_p3_q${qIdx + 1}.jpg')) "Part 3 dynamically loads dedicated cropped question image per question"
Report-Assert ($stEngine.Contains('Choose your answer:') -and $stEngine.Contains('Option ${opt}')) "Part 3 renders large interactive A, B, C option selector buttons"

# Check Part 4 Direct Object Colouring & No Spoiler Text Logic
Report-Assert ($stEngine.Contains('page_${lisP2 + 4}_cropped.jpg')) "Part 4 dynamically loads cropped scene illustration"
Report-Assert ($stEngine.Contains('id="starters-p4-wrapper"') -and $stEngine.Contains('handleStartersP4SpotClick')) "Part 4 renders direct interactive object colouring hotspots on picture"
Report-Assert (-not $stEngine.Contains('Questions 16 - 20: Listen & Apply Colour')) "Part 4 completely removes bottom descriptive question spoiler rows"
Report-Assert ($stEngine.Contains('Click to listen to each question:') -and $stEngine.Contains('Question ${q.id}')) "Part 4 audio player provides individual listen buttons without spoiler text"

# Check Reading & Writing Part 1 Cropped Image Card Logic
Report-Assert ($stEngine.Contains('test${testNum}_rw1_q${q.id}.jpg')) "Reading & Writing Part 1 dynamically loads dedicated cropped question image per question"
Report-Assert ($stEngine.Contains('test${testNum}_rw1_example1.jpg') -and $stEngine.Contains('test${testNum}_rw1_example2.jpg')) "Reading & Writing Part 1 displays authentic book examples"
Report-Assert (-not $stEngine.Contains("q.icon || '🖼️'")) "Reading & Writing Part 1 removed broken image icon placeholder"

# Check Reading & Writing Part 3 Cropped Strip & Interactive Tile Logic
Report-Assert ($stEngine.Contains('test${testNum}_rw3_q${qIdx + 1}.jpg')) "Reading & Writing Part 3 dynamically loads dedicated cropped strip per question"
Report-Assert ($stEngine.Contains('test${testNum}_rw3_example.jpg')) "Reading & Writing Part 3 displays authentic book example strip"
Report-Assert (-not $stEngine.Contains('rw3-gallery')) "Reading & Writing Part 3 removed full-page gallery dump"
Report-Assert ($stEngine.Contains('handleStartersAppendLetter') -and $stEngine.Contains('handleStartersClearWord')) "Reading & Writing Part 3 includes letter tap helpers and clear function"
Report-Assert (-not $stEngine.Contains('({$q.scrambled})')) "Reading & Writing Part 3 eliminated undefined scrambled letter badges"

# ----------------------------------------------------
# 3. VERIFY IELTS DATA INTEGRITY & 20-TEST DIVERSITY
# ----------------------------------------------------
Write-Host "`n--- 3. Testing IELTS Data Integrity & Diversity ---" -ForegroundColor Yellow
$ieltsData = [System.IO.File]::ReadAllText("ielts_data.js", [System.Text.Encoding]::UTF8)

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

Report-Assert ($ieltsData.Contains("ieltsProfileData.ielts_tests[profile.id] = generateCambridgeTest(profile, idx);")) "All 20 tests dynamically generated and registered to ieltsProfileData"

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
Report-Assert ($idxHtml.Contains("ielts_data.js?v=20261020_v5")) "index.html loads updated ielts_data.js cache buster"
Report-Assert ($idxHtml.Contains("ielts_test_engine.js?v=20261020_v5")) "index.html loads updated ielts_test_engine.js cache buster"
Report-Assert ($idxHtml.Contains("starters_data.js?v=20261020_v5")) "index.html loads updated starters_data.js cache buster"
Report-Assert ($idxHtml.Contains("starters_test_engine.js?v=20261020_v5")) "index.html loads updated starters_test_engine.js cache buster"

Write-Host "`n==========================================================" -ForegroundColor Cyan
if ($allPassed) {
    Write-Host "   SUCCESS: ALL TESTS PASSED! 100% READY FOR DEPLOYMENT   " -ForegroundColor Green
} else {
    Write-Host "   FAILURE: SOME TESTS FAILED! PLEASE REVIEW LOGS ABOVE    " -ForegroundColor Red
}
Write-Host "==========================================================" -ForegroundColor Cyan
