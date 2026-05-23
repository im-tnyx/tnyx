@echo off
setlocal

REM Root path of repository (location of this bat file)
set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

REM Always keep pnpm store inside project
set "PNPM_STORE_DIR=%ROOT%\.pnpm-store"

:menu
cls
echo ==========================================
echo            TNYX MOBILE TOOLBOX
echo ==========================================
echo Project: %ROOT%
echo.
echo [1] First time setup / dependencies install
echo     Kaam: pnpm install
echo.
echo [2] Normal run (same Wi-Fi)
echo     Kaam: Expo start (LAN) - phone aur laptop same network par
echo.
echo [3] Remote run (different network/location)
echo     Kaam: Expo start (Tunnel)
echo.
echo [4] Code error check
echo     Kaam: TypeScript typecheck
echo.
echo [5] Android quick run
echo     Kaam: Expo Android launch
echo.
echo [6] Fresh start (issue fix)
echo     Kaam: Metro cache clear + start
echo.
echo [0] Exit
echo.
echo Suggested daily use: 2
echo If connection issue: 3
echo If app glitch/cache issue: 6
echo If code verify karna ho: 4
echo.
set /p CHOICE=Select option:

if "%CHOICE%"=="1" goto install
if "%CHOICE%"=="2" goto start_lan
if "%CHOICE%"=="3" goto start_tunnel
if "%CHOICE%"=="4" goto typecheck
if "%CHOICE%"=="5" goto android
if "%CHOICE%"=="6" goto clear_start
if "%CHOICE%"=="0" goto end
goto menu

:install
cd /d "%ROOT%"
call pnpm.cmd install
pause
goto menu

:start_lan
cd /d "%ROOT%\apps\mobile"
call pnpm.cmd start
pause
goto menu

:start_tunnel
cd /d "%ROOT%\apps\mobile"
call pnpm.cmd start --tunnel
pause
goto menu

:typecheck
cd /d "%ROOT%"
call pnpm.cmd --filter mobile typecheck
pause
goto menu

:android
cd /d "%ROOT%\apps\mobile"
call pnpm.cmd android
pause
goto menu

:clear_start
cd /d "%ROOT%\apps\mobile"
call pnpm.cmd start --clear
pause
goto menu

:end
endlocal
exit /b 0
