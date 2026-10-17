@echo off
chcp 65001 >nul
echo ========================================================
echo   Đang tự động đồng bộ Smart English Class lên Web...
echo ========================================================
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Auto update: %date% %time%"
"C:\Program Files\Git\cmd\git.exe" push origin main
echo.
echo ========================================================
echo   CẬP NHẬT THÀNH CÔNG!
echo   Cloudflare Pages sẽ tự động deploy trang web trong 15s.
echo ========================================================
timeout /t 4 >nul
