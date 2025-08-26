# Contentful Setup Guide for Jacksonville Post-Construction Cleanup

## Environment Variables Needed

Create a `.env.local` file in your project root with:

```bash
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here

# Optional: Contentful Environment (defaults to 'master')
CONTENTFUL_ENVIRONMENT=master
```

## Content Models to Create in Contentful

### 1. Post Construction Service
- **Title** (Text, Short)
- **Description** (Text, Long)
- **Features** (Array of Text)
- **Price** (Text, Short)
- **Icon** (Text, Short)
- **Category** (Symbol: residential, commercial, specialized)
- **Estimated Time** (Text, Short)
- **Includes** (Array of Text)
- **Add Ons** (Array of Text)

### 2. Construction Phase
- **Phase** (Text, Short)
- **Title** (Text, Short)
- **Description** (Text, Long)
- **Tasks** (Array of Text)
- **Estimated Duration** (Text, Short)
- **Tools** (Array of Text)
- **Safety Notes** (Array of Text)
- **Phase Number** (Integer, for ordering)

### 3. Testimonial
- **Name** (Text, Short)
- **Company** (Text, Short)
- **Location** (Text, Short)
- **Rating** (Integer, 1-5)
- **Comment** (Text, Long)
- **Project Type** (Symbol: post-construction, residential, commercial)
- **Date** (Date)
- **Verified** (Boolean)

### 4. Service Area
- **Name** (Text, Short)
- **County** (Text, Short)
- **Zip Codes** (Array of Text)
- **Specializations** (Array of Text)
- **Base Rate** (Number)
- **Per Sq Ft** (Number)
- **Minimum** (Number)

### 5. FAQ
- **Question** (Text, Long)
- **Answer** (Text, Long)
- **Category** (Symbol: post-construction, general, pricing)
- **Tags** (Array of Text)
- **Order** (Integer, for ordering)

### 6. Pricing Data
- **Service Type** (Symbol: post-construction)
- **Base Rates** (JSON Object)
- **Multipliers** (JSON Object)
- **Add Ons** (JSON Object)
- **Discounts** (JSON Object)

## Getting Started

1. Sign up for Contentful at contentful.com
2. Create a new space for your cleaning service
3. Create the content models above
4. Add your environment variables
5. Start creating content!

## Sample Content

### Post Construction Service Example:
- **Title**: Full-Service Construction Cleanup
- **Description**: Complete post-construction cleaning from debris removal to final detailing
- **Features**: ["Heavy debris removal", "Construction dust elimination", "Surface restoration"]
- **Price**: "From $0.35/sq ft"
- **Category**: specialized
- **Estimated Time**: "2-8 hours depending on size"

