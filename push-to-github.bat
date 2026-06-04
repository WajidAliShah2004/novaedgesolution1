@echo off
echo ========================================
echo  NovaEdge Portfolio - Push to GitHub
echo ========================================
echo.

echo Step 1: Clearing old credentials...
cmdkey /delete:git:https://github.com 2>nul
echo Done!
echo.

echo Step 2: Pushing to GitHub...
echo Repository: https://github.com/WajidAliShah2004/NovaEdgeportfolio.git
echo.
echo You will be prompted for:
echo   Username: WajidAliShah2004
echo   Password: [Your GitHub Personal Access Token]
echo.

git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================
    echo  SUCCESS! Code pushed to GitHub
    echo ========================================
    echo.
    echo View your repository at:
    echo https://github.com/WajidAliShah2004/NovaEdgeportfolio
) else (
    echo ========================================
    echo  FAILED - Please check credentials
    echo ========================================
    echo.
    echo Make sure you:
    echo 1. Created a Personal Access Token at: https://github.com/settings/tokens
    echo 2. Selected 'repo' scope when creating the token
    echo 3. Use the token as your password (not your GitHub password)
)

echo.
pause
