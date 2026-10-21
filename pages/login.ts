import { type Page } from '@playwright/test';

class LoginPage {
  page: Page;
  username_textbox: ReturnType<Page['getByRole']>;
  password_textbox: ReturnType<Page['getByRole']>;
  login_button: ReturnType<Page['getByRole']>;

  constructor(page: Page) {
    this.page = page;
    this.username_textbox = page.getByRole('textbox', { name: 'Username' });
    this.password_textbox = page.getByRole('textbox', { name: 'Password' });
    this.login_button = page.getByRole('button', { name: ' Login' });
  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.username_textbox.click();
    await this.username_textbox.fill(username);
    await this.password_textbox.click();
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}

export default LoginPage;
