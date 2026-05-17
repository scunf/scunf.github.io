param(
    [string]$msg = "update: update content"
)

Write-Host "====== Git Push Script ======" -ForegroundColor Cyan
Write-Host ""

git status
Write-Host ""

Write-Host "Commit message: $msg" -ForegroundColor Yellow
git add .
git commit -m $msg

if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "====== Push Success! ======" -ForegroundColor Green
}
