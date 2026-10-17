@echo off
cd /d "%~dp0"
set "PATH=C:\Program Files\Git\cmd;%PATH%"

echo ========================================================
echo   SMART ENGLISH CLASS - AUTO DEPLOY
echo ========================================================
echo.
echo [1/3] Adding changes...
git add .

echo [2/3] Committing changes...
git commit -m "Update project: %date% %time%"

echo [3/3] Uploading all files to GitHub...
git push -u origin main

echo.
echo ========================================================
echo   DE FACTO SUCCESS / HOAN TAT!
echo ========================================================
pause
