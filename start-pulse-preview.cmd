@echo off
title Pulse Preview - http://127.0.0.1:3001
cd /d "%~dp0"
echo.
echo Pulse preview is repairing and starting...
echo URL: http://127.0.0.1:3001
echo Keep this window open while previewing.
echo.
echo Stopping old service on port 3001...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3001" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%a >nul 2>nul
)
if exist ".next" (
  echo Cleaning old shared cache...
  rmdir /s /q ".next"
)
if exist ".next-dev" (
  echo Cleaning old development cache...
  rmdir /s /q ".next-dev"
)
if exist ".next-build" (
  echo Keeping production build cache isolated in .next-build.
)
npm.cmd run dev -- --hostname 127.0.0.1 --port 3001
pause
