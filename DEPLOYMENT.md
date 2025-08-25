# Netlify Deployment Guide

## Repository Structure
```
kingshaus_web/
├── netlify.toml          # Netlify configuration (root level)
├── frontend/             # Frontend application
│   ├── .nvmrc           # Node version specification
│   ├── src/
│   ├── package.json
│   └── ...
└── backend/              # Backend application
```

## Netlify Configuration

The `netlify.toml` file in the root directory contains:

```toml
[build]
  base = "frontend"           # Points to the frontend directory
  publish = "frontend/dist"   # Build output location
  command = "npm run build"   # Build command

[build.environment]
  NODE_VERSION = "20"         # Updated Node version
  NPM_VERSION = "10"          # NPM version
```

## Deployment Steps

1. **Connect Repository to Netlify**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your GitHub repository: `ogsuryansh/kingshaus`

2. **Build Settings** (should auto-detect from netlify.toml)
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

3. **Deploy**
   - Click "Deploy site"

## Troubleshooting

### If you get "Base directory does not exist: /opt/build" error:

**This is the most common issue. Follow these steps:**

1. **Verify Repository Structure**: Ensure your repository has this exact structure:
   ```
   kingshaus/
   ├── netlify.toml          # MUST be in root
   ├── frontend/
   │   ├── .nvmrc           # Node version file
   │   ├── package.json     # MUST exist
   │   ├── src/
   │   └── ...
   └── backend/
   ```

2. **Check netlify.toml Location**: The `netlify.toml` file MUST be in the **root** of your repository, not in any subdirectory.

3. **Verify Git Repository**: Make sure you're connecting the correct repository to Netlify:
   - Repository should be: `ogsuryansh/kingshaus`
   - NOT: `ogsuryansh/kingshaus_web` (if this is your local folder name)

4. **Manual Netlify Settings**: If auto-detection fails, manually set in Netlify dashboard:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

5. **Clear Netlify Cache**: 
   - Go to Site settings > Build & deploy > Clear cache and deploy site

### If build fails:

1. **Check Dependencies**: Ensure `package.json` exists in the frontend directory
2. **Check Node Version**: The configuration specifies Node.js 20
3. **Check Build Command**: Run `npm run build` locally in the frontend directory to test

### If you get Node version errors:

1. **Update Node Version**: The configuration now uses Node 20
2. **Check .nvmrc**: Ensure the frontend directory has a `.nvmrc` file with `20`
3. **Clear Build Cache**: Clear Netlify's build cache and redeploy

## Environment Variables

If you need environment variables:

1. Add them in Netlify dashboard under Site settings > Environment variables
2. Prefix with `VITE_` to make them available in your React app
3. Access using `import.meta.env.VITE_VARIABLE_NAME`

## Manual Deployment Test

To test locally before deploying:

```bash
cd frontend
npm install
npm run build
```

This should create a `dist` directory with your built application.

## Common Issues and Solutions

### Issue: "Base directory does not exist: /opt/build"
**Solution**: 
- Ensure `netlify.toml` is in the repository root
- Verify the repository structure matches the guide above
- Check that you're connecting the correct repository to Netlify

### Issue: Build fails with Node version error
**Solution**:
- The configuration now uses Node 20
- Clear Netlify build cache
- Redeploy the site

### Issue: 404 errors on routes
**Solution**:
- The redirect rule in `netlify.toml` handles SPA routing
- Ensure the redirect section is present in the configuration
