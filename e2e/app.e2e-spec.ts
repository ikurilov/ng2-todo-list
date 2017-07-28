import { AngularTodoListPage } from './app.po';

describe('angular-todo-list App', () => {
  let page: AngularTodoListPage;

  beforeEach(() => {
    page = new AngularTodoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
