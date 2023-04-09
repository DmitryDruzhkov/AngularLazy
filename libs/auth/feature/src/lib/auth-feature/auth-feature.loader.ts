export const LoadAuthFeatureModule = async (): Promise<typeof AuthFeatureComponent> => {
  const { AuthFeatureComponent } = await import(
    './auth-feature.component'
  );
  return AuthFeatureComponent;
};
