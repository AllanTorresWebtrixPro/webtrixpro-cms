import { BaseService } from '../base/BaseService';
import type {
  ContactData,
  ContactFormData,
} from '@/types/contact/contact.types';

export class ContactService extends BaseService<
  ContactData,
  ContactFormData,
  never
> {
  protected getBasePath(): string {
    return '/api/v1/contact';
  }

  async getContactInfo(): Promise<ContactData> {
    return await this.customFetch<ContactData>(this.getBasePath());
  }

  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    return await this.customFetch<{ success: boolean; message: string }>(
      `${this.getBasePath()}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}

export const contactService = new ContactService();

