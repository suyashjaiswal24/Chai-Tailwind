# Publishing ChaiTailwind to NPM

This guide will walk you through publishing ChaiTailwind to npm for the first time.

## Prerequisites

1. **npm account**: Create one at [npmjs.com](https://www.npmjs.com/signup)
2. **Node.js**: Ensure you have Node.js installed

## Step-by-Step Publishing Guide

### 1. Update Package Information

Edit `package.json` and update these fields:

```json
{
  "name": "chaitailwind",  // Make sure this name is available on npm
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/chaitailwind.git"
  },
  "author": "Your Name <your.email@example.com>",
  "homepage": "https://github.com/YOUR_USERNAME/chaitailwind#readme",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/chaitailwind/issues"
  }
}
```

### 2. Check Package Name Availability

Before publishing, check if the name is available:

```bash
npm search chaitailwind
```

If the name is taken, you can:
- Choose a different name like `@yourusername/chaitailwind`
- Or pick a completely different name

### 3. Build the Distribution Files

```bash
npm run build
```

This creates the `dist/` folder with bundled files.

### 4. Test Locally (Optional but Recommended)

```bash
# Create a test directory
mkdir test-package
cd test-package
npm init -y

# Install your local package
npm install ../path/to/chaitailwind

# Create a test HTML file
echo '<script src="node_modules/chaitailwind/dist/chaitailwind.min.js"></script>' > test.html
echo '<div class="chai-bg-blue chai-color-white chai-p-20">Test</div>' >> test.html

# Open test.html in browser to verify it works
```

### 5. Login to NPM

```bash
npm login
```

Enter your:
- Username
- Password
- Email (this will be public)
- One-time password (if you have 2FA enabled)

### 6. Dry Run (Test Before Publishing)

```bash
npm publish --dry-run
```

This shows what will be published without actually publishing.

### 7. Publish to NPM

For first publication:

```bash
npm publish
```

If you want to publish as a scoped package (e.g., `@yourusername/chaitailwind`):

```bash
npm publish --access public
```

### 8. Verify Publication

1. Check on npm: `https://www.npmjs.com/package/chaitailwind`
2. Install it: `npm install chaitailwind`
3. Test via CDN: `https://cdn.jsdelivr.net/npm/chaitailwind@1/dist/chaitailwind.min.js`

## Publishing Updates

When you make changes and want to publish a new version:

### 1. Update Version

Follow [Semantic Versioning](https://semver.org/):

```bash
npm version patch   # 1.0.0 -> 1.0.1 (bug fixes)
npm version minor   # 1.0.0 -> 1.1.0 (new features, backward compatible)
npm version major   # 1.0.0 -> 2.0.0 (breaking changes)
```

### 2. Rebuild and Publish

```bash
npm run build
npm publish
```

### 3. Push to GitHub

```bash
git push origin main --tags
```

## Common Issues

### "You do not have permission to publish"

The package name is already taken. Choose a different name or use a scoped package.

### "402 Payment Required"

You're trying to publish a scoped package as private. Use:
```bash
npm publish --access public
```

### "ENEEDAUTH"

You're not logged in. Run:
```bash
npm login
```

### Files Missing in Published Package

Check your `files` array in package.json and `.npmignore` file.

## NPM Package Best Practices

1. **Use Semantic Versioning**: Always follow semver
2. **Write a Good README**: Include examples and clear documentation
3. **Add Keywords**: Help users discover your package
4. **Test Before Publishing**: Always test the package locally
5. **Keep it Small**: Only include necessary files (use `.npmignore`)
6. **Add a License**: MIT is common for open source
7. **Document Breaking Changes**: In changelog or release notes

## Useful Commands

```bash
# View what will be published
npm pack --dry-run

# Check package size
npm pack
du -h *.tgz

# Unpublish (only within 72 hours, discouraged)
npm unpublish chaitailwind@1.0.0

# Deprecate a version
npm deprecate chaitailwind@1.0.0 "Use version 1.1.0 instead"

# View package info
npm info chaitailwind

# View download stats
npm view chaitailwind
```

## CDN Links After Publishing

Once published, your package is automatically available via CDN:

**jsDelivr:**
- Latest: `https://cdn.jsdelivr.net/npm/chaitailwind@latest/dist/chaitailwind.min.js`
- Version 1.x: `https://cdn.jsdelivr.net/npm/chaitailwind@1/dist/chaitailwind.min.js`
- Specific: `https://cdn.jsdelivr.net/npm/chaitailwind@1.0.0/dist/chaitailwind.min.js`

**unpkg:**
- Latest: `https://unpkg.com/chaitailwind@latest/dist/chaitailwind.min.js`
- Version 1.x: `https://unpkg.com/chaitailwind@1/dist/chaitailwind.min.js`

## GitHub Repository Setup (Recommended)

1. Create a GitHub repository
2. Initialize git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ChaiTailwind v1.0.0"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/chaitailwind.git
   git push -u origin main
   ```

3. Create releases on GitHub matching your npm versions

## Support

If you need help:
- NPM Docs: https://docs.npmjs.com/
- GitHub Issues: Create an issue in your repository
- NPM Support: https://www.npmjs.com/support

---

**Good luck with your first npm package! 🎉**
