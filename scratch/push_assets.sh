#!/bin/bash
echo "🚀 Preparing to push premium assets to GitHub..."
git add public/*.png src/assets/*.png
git commit -m "Add premium visual assets"
echo "📦 Pushing to main branch..."
git push -u origin main
echo "✅ Assets pushed successfully! Check your Vercel deployment."
