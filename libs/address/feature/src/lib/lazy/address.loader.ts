export const LoadAddressComponent = async (): Promise<typeof AddressComponent> => {
  const { AddressComponent } = await import(
    '../components/address/address.component'
  );
  return AddressComponent;
};
