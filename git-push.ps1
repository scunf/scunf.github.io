param(
    [string]$msg = "update: 更新内容"
)

Write-Host "====== Git 一键提交 ======" -ForegroundColor Cyan
Write-Host ""

git status
Write-Host ""

Write-Host "提交信息: $msg" -ForegroundColor Yellow
git add .
git commit -m $msg

if ($LASTEXITCODE -ne 0) {
    Write-Host "提交失败，请检查错误信息" -ForegroundColor Red
    exit 1
}

Write-Host ""
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "====== 推送成功 ======" -ForegroundColor Green
}
