@echo off
echo ========================================
echo  GitHub Browser Authentication Setup
echo ========================================
echo.

echo Checking if GitHub CLI is installed...
gh --version >nul 2>&1
if %errorlevel% neq 0 (
    echo GitHub CLI is NOT installed.
    echo.
    echo Opening download page...
    start https://cli.github.com/
    echo.
    echo Please:
    echo 1. Download and install GitHub CLI from the opened page
    echo 2. Restart this script after installation
    echo.
    pause
    exit
)

echo GitHub CLI is installed!
echo.

echo ========================================
echo  Step 1: Authenticate with GitHub
echo ========================================
echo.
echo A browser window will open for you to login.
echo Please login with your GitHub account.
echo.
pause

gh auth login --web --git-protocol https --hostname github.com

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo  Authentication Successful!
    echo ========================================
    echo.
    echo Now pushing your code...
    echo.
    
    git push -u origin main
    
    if %errorlevel% equ 0 (
        echo.
        echo ========================================
        echo  SUCCESS! Code pushed to GitHub
        echo ========================================
        echo.
        echo View your repository at:
        echo https://github.com/WajidAliShah2004/NovaEdgeportfolio
        echo.
    ) else (
        echo.
        echo Push failed. Trying alternative method...
        echo.
        gh auth setup-git
        git push -u origin main
    )
) else (
    echo.
    echo Authentication failed or was cancelled.
    echo Please try again.
)

echo.
pause
