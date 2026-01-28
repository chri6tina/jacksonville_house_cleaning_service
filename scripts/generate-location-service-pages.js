const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'locationServiceData.json');
const { locations, services } = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const template = ({ location, service }) => `import LocationServicePage from '@/components/LocationServicePage';
import { getLocationBySlug, getServiceBySlug } from '@/lib/locationServiceData';
import { notFound } from 'next/navigation';

export default function ${toComponentName(location.slug, service.slug)}() {
  const location = getLocationBySlug('${location.slug}');
  const service = getServiceBySlug('${service.slug}');

  if (!location || !service) {
    notFound();
  }

  return <LocationServicePage location={location} service={service} />;
}
`;

const toComponentName = (locationSlug, serviceSlug) =>
  `${pascalize(locationSlug)}${pascalize(serviceSlug)}Page`;

const pascalize = (value) =>
  value
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\s+/g, '');

let createdCount = 0;

locations.forEach((location) => {
  services.forEach((service) => {
    const dir = path.join(
      __dirname,
      '..',
      'src',
      'app',
      'locations',
      location.slug,
      service.slug
    );
    const filePath = path.join(dir, 'page.tsx');

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(filePath)) {
      return;
    }

    fs.writeFileSync(filePath, template({ location, service }), 'utf8');
    createdCount += 1;
  });
});

console.log(`Created ${createdCount} location-service pages.`);
