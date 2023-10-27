export const getPackageVersion = async () => {
  const response = await fetch(`https://registry.npmjs.org/doticons`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data['dist-tags'] && data['dist-tags'].latest) {
    return data['dist-tags'].latest;
  } else {
    throw new Error(`Package not found on npm.`);
  }
};
