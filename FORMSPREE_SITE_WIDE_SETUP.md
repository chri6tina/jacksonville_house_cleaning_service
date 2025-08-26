# Formspree Site-Wide Setup Guide

## 🎯 **Recommended Approach: Multiple Form IDs**

Create separate Formspree forms for different services to better organize your leads and track performance.

## 📋 **Forms to Create in Formspree**

### **1. Post-Construction Cleaning** ✅ (Already Created)
- **Form ID:** `xrblngeo`
- **Email Subject:** "New Post-Construction Quote Request"
- **Used on:** Post-construction cleaning page

### **2. General Contact Form**
- **Form ID:** Create new in Formspree
- **Email Subject:** "New Contact Form Submission"
- **Used on:** Contact page, general inquiries

### **3. Move-in/Move-out Cleaning**
- **Form ID:** Create new in Formspree
- **Email Subject:** "New Move-in/Move-out Quote Request"
- **Used on:** Move-in/move-out page

### **4. Commercial Office Cleaning**
- **Form ID:** Create new in Formspree
- **Email Subject:** "New Commercial Office Cleaning Quote"
- **Used on:** Commercial office cleaning page

### **5. Carpet Cleaning**
- **Form ID:** Create new in Formspree
- **Email Subject:** "New Carpet Cleaning Quote Request"
- **Used on:** Carpet cleaning page

### **6. Standard Cleaning**
- **Form ID:** Create new in Formspree
- **Email Subject:** "New Standard Cleaning Quote Request"
- **Used on:** Standard cleaning page

## 🚀 **Setup Steps**

### **Step 1: Create Forms in Formspree**
1. Go to [formspree.io](https://formspree.io)
2. Click "New Form" for each service
3. Name them descriptively
4. Copy each Form ID

### **Step 2: Update Form Components**
Replace the form submission logic in each component with Formspree.

### **Step 3: Test Each Form**
Submit test forms to ensure they're working correctly.

## 💡 **Benefits of Multiple Forms**

- **Better Organization:** Know exactly which service the lead is for
- **Different Email Subjects:** Easy to identify in your inbox
- **Service-Specific Tracking:** See which services generate the most leads
- **Targeted Follow-up:** Respond appropriately to each service type
- **Analytics:** Track performance of each form separately

## 🔧 **Implementation Examples**

### **Post-Construction Form (Already Done)**
```typescript
const response = await fetch('https://formspree.io/f/xrblngeo', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

### **General Contact Form**
```typescript
const response = await fetch('https://formspree.io/f/YOUR_GENERAL_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

### **Service-Specific Forms**
```typescript
const response = await fetch('https://formspree.io/f/YOUR_SERVICE_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

## 📊 **Formspree Dashboard Organization**

With multiple forms, you'll see:
- **Separate submission lists** for each service
- **Individual analytics** for each form
- **Service-specific data** for better lead management
- **Performance tracking** by service type

## 🎯 **Next Steps**

1. **Create the additional forms** in Formspree
2. **Update each component** with the appropriate Form ID
3. **Test all forms** to ensure they're working
4. **Set up email filters** to organize incoming leads

---

**Multiple forms = Better organization = More leads converted! 🚀**

