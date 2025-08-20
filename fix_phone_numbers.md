# Phone Number Fix Guide

## Files that need phone number updates:

### Replace `+19045551234` with `9044563851` in:

1. **Service Pages:**
   - `/src/app/services/page.tsx` (line 507)
   - `/src/app/pressure-washing/page.tsx` (lines 166, 340)
   - `/src/app/senior-citizen-cleaning/page.tsx` (lines 184, 408)
   - `/src/app/commercial-office-cleaning/page.tsx` (lines 189, 413)
   - `/src/app/gutter-cleaning/page.tsx` (lines 191, 406)
   - `/src/app/air-duct-cleaning/page.tsx` (lines 126, 276)
   - `/src/app/vacation-rental-cleaning/page.tsx` (lines 186, 410)
   - `/src/app/event-venue-cleaning/page.tsx` (lines 193, 417)
   - `/src/app/pet-friendly-cleaning/page.tsx` (lines 183, 419)
   - `/src/app/medical-facility-cleaning/page.tsx` (lines 195, 419)

2. **Location Pages:**
   - `/src/app/locations/atlantic-beach/page.tsx` (line 468)
   - `/src/app/locations/neptune-beach/page.tsx` (line 468)
   - `/src/app/locations/orange-park/page.tsx` (line 551)
   - `/src/app/locations/san-marco/page.tsx` (line 286)
   - `/src/app/locations/riverside/page.tsx` (line 286)
   - `/src/app/locations/ponte-vedra-beach/page.tsx` (line 468)

3. **Orange Park Service Pages:**
   - All service pages in `/src/app/locations/orange-park/` directory

### Replace `904-555-0123` with `9044563851` in:
- `/src/app/contact/page.tsx` (lines 300, 363)

## Quick Fix Command:
```bash
# Find all files with wrong phone numbers
grep -r "+19045551234" src/ --include="*.tsx"
grep -r "904-555-0123" src/ --include="*.tsx"

# Replace all instances (use with caution)
find src/ -name "*.tsx" -exec sed -i 's/+19045551234/9044563851/g' {} \;
find src/ -name "*.tsx" -exec sed -i 's/904-555-0123/9044563851/g' {} \;
```

## Note:
- Always backup files before bulk replacements
- Test the site after making changes
- Ensure phone number format consistency across all pages
