export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  tollFree: string;
  email: string;
  mapEmbedUrl?: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  info: ContactInfo;
}

