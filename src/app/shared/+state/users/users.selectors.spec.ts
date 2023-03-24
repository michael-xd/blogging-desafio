import { State } from './users.reducer';
import * as PostSelectors from './users.selectors';
import { User } from './users.models';

describe('Users Selectors', () => {
  let users: User[];
  let state: State;

  beforeEach(() => {
    users = [
      {
        id: 5,
        username: 'Mauro Andrade',
        memberSince: '2013-09-01T20:22Z',
        friendIds: [4, 6],
        posts: [
          {
            id: 16,
            title: 'Título de um post criado por um usuário deste blog',
            subtitle:
              'Usuários que utilizam este blog podem ter, ou não, interesse em criar posts',
            content:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dolor, fringilla eu eleifend non, hendrerit hendrerit orci. Proin vitae tincidunt metus, eget finibus elit. Maecenas dolor enim, commodo vitae suscipit eu, laoreet et eros. Quisque ornare sodales ante dignissim pharetra. Suspendisse in nisi dui. Donec ut luctus magna, quis porta ipsum. Mauris hendrerit sit amet nibh vel venenatis. Quisque accumsan tortor id consectetur blandit. Ut eget maximus velit, ac imperdiet orci. Mauris auctor, eros ac gravida tincidunt, risus velit porta arcu, ac sollicitudin dui est nec leo. Vivamus tristique egestas venenatis. Sed venenatis Arthur Silveiraeleifend risus vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ac tellus pharetra, efficitur tortor et, pharetra ex. Nam pulvinar odio ut nisl viverra tincidunt. Ut scelerisque augue ex, at gravida sem ultrices et. Vivamus sit amet mi nibh. Nullam lacinia velit laoreet libero lobortis tincidunt ut a ex. Nunc auctor hendrerit risus. Donec risus mauris, interdum non ligula ac, tristique ornare justo. Curabitur vel tortor ac libero interdum finibus eu vel urna. Fusce tempor, lacus id efficitur convallis, neque massa pharetra sem, id maximus ligula libero at libero. Cras ipsum quam, lobortis in elit at, tincidunt pellentesque mauris. Aliquam dapibus orci ut blandit tempor. Morbi consectetur dapibus massa id cursus. Quisque vel mollis sapien. Suspendisse scelerisque pellentesque ipsum at ultrices. Fusce in ligula accumsan, maximus eros ut, porttitor nunc. Ut in mi neque. Sed sollicitudin consequat turpis, non congue arcu finibus vitae. Phasellus in vestibulum risus. Donec lacus est, scelerisque vulputate tellus at, suscipit porta dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tincidunt ultrices est, nec accumsan quam bibendum sed. Praesent ac condimentum magna. Fusce vel maximus nisi. Quisque nec arcu blandit, rhoncus risus vitae, convallis augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel ultricies purus. Aliquam vulputate ullamcorper dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec lobortis dictum enim quis porttitor. Suspendisse augue augue, facilisis vitae bibendum nec, viverra nec metus. In vel nisl nec ipsum vestibulum interdum vel eget lorem. Duis suscipit, ante at sagittis blandit, massa nunc elementum urna, et accumsan arcu massa non dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
            isCollapsed: false,
          },
          {
            id: 17,
            title: 'Título de um post criado por um usuário deste blog',
            subtitle:
              'Usuários que utilizam este blog podem ter, ou não, interesse em criar posts',
            content:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dolor, fringilla eu eleifend non, hendrerit hendrerit orci. Proin vitae tincidunt metus, eget finibus elit. Maecenas dolor enim, commodo vitae suscipit eu, laoreet et eros. Quisque ornare sodales ante dignissim pharetra. Suspendisse in nisi dui. Donec ut luctus magna, quis porta ipsum. Mauris hendrerit sit amet nibh vel venenatis. Quisque accumsan tortor id consectetur blandit. Ut eget maximus velit, ac imperdiet orci. Mauris auctor, eros ac gravida tincidunt, risus velit porta arcu, ac sollicitudin dui est nec leo. Vivamus tristique egestas venenatis. Sed venenatis eleifend risus vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ac tellus pharetra, efficitur tortor et, pharetra ex. Nam pulvinar odio ut nisl viverra tincidunt. Ut scelerisque augue ex, at gravida sem ultrices et. Vivamus sit amet mi nibh. Nullam lacinia velit laoreet libero lobortis tincidunt ut a ex. Nunc auctor hendrerit risus. Donec risus mauris, interdum non ligula ac, tristique ornare justo. Curabitur vel tortor ac libero interdum finibus eu vel urna. Fusce tempor, lacus id efficitur convallis, neque massa pharetra sem, id maximus ligula libero at libero. Cras ipsum quam, lobortis in elit at, tincidunt pellentesque mauris. Aliquam dapibus orci ut blandit tempor. Morbi consectetur dapibus massa id cursus. Quisque vel mollis sapien. Suspendisse scelerisque pellentesque ipsum at ultrices. Fusce in ligula accumsan, maximus eros ut, porttitor nunc. Ut in mi neque. Sed sollicitudin consequat turpis, non congue arcu finibus vitae. Phasellus in vestibulum risus. Donec lacus est, scelerisque vulputate tellus at, suscipit porta dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tincidunt ultrices est, nec accumsan quam bibendum sed. Praesent ac condimentum magna. Fusce vel maximus nisi. Quisque nec arcu blandit, rhoncus risus vitae, convallis augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel ultricies purus. Aliquam vulputate ullamcorper dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec lobortis dictum enim quis porttitor. Suspendisse augue augue, facilisis vitae bibendum nec, viverra nec metus. In vel nisl nec ipsum vestibulum interdum vel eget lorem. Duis suscipit, ante at sagittis blandit, massa nunc elementum urna, et accumsan arcu massa non dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
            isCollapsed: false,
          },
        ],
      },
      {
        id: 6,
        username: 'Rafaela Moreira',
        memberSince: '2014-02-03T15:33Z',
        friendIds: [4, 5],
        posts: [
          {
            id: 18,
            title: 'Título de um post criado por um usuário deste blog',
            subtitle:
              'Usuários que utilizam este blog podem ter, ou não, interesse em criar posts',
            content:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dolor, fringilla eu eleifend non, hendrerit hendrerit orci. Proin vitae tincidunt metus, eget finibus elit. Maecenas dolor enim, commodo vitae suscipit eu, laoreet et eros. Quisque ornare sodales ante dignissim pharetra. Suspendisse in nisi dui. Donec ut luctus magna, quis porta ipsum. Mauris hendrerit sit amet nibh vel venenatis. Quisque accumsan tortor id consectetur blandit. Ut eget maximus velit, ac imperdiet orci. Mauris auctor, eros ac gravida tincidunt, risus velit porta arcu, ac sollicitudin dui est nec leo. Vivamus tristique egestas venenatis. Sed venenatis Arthur Silveiraeleifend risus vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ac tellus pharetra, efficitur tortor et, pharetra ex. Nam pulvinar odio ut nisl viverra tincidunt. Ut scelerisque augue ex, at gravida sem ultrices et. Vivamus sit amet mi nibh. Nullam lacinia velit laoreet libero lobortis tincidunt ut a ex. Nunc auctor hendrerit risus. Donec risus mauris, interdum non ligula ac, tristique ornare justo. Curabitur vel tortor ac libero interdum finibus eu vel urna. Fusce tempor, lacus id efficitur convallis, neque massa pharetra sem, id maximus ligula libero at libero. Cras ipsum quam, lobortis in elit at, tincidunt pellentesque mauris. Aliquam dapibus orci ut blandit tempor. Morbi consectetur dapibus massa id cursus. Quisque vel mollis sapien. Suspendisse scelerisque pellentesque ipsum at ultrices. Fusce in ligula accumsan, maximus eros ut, porttitor nunc. Ut in mi neque. Sed sollicitudin consequat turpis, non congue arcu finibus vitae. Phasellus in vestibulum risus. Donec lacus est, scelerisque vulputate tellus at, suscipit porta dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tincidunt ultrices est, nec accumsan quam bibendum sed. Praesent ac condimentum magna. Fusce vel maximus nisi. Quisque nec arcu blandit, rhoncus risus vitae, convallis augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel ultricies purus. Aliquam vulputate ullamcorper dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec lobortis dictum enim quis porttitor. Suspendisse augue augue, facilisis vitae bibendum nec, viverra nec metus. In vel nisl nec ipsum vestibulum interdum vel eget lorem. Duis suscipit, ante at sagittis blandit, massa nunc elementum urna, et accumsan arcu massa non dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
            isCollapsed: false,
          },
          {
            id: 19,
            title: 'Título de um post criado por um usuário deste blog',
            subtitle:
              'Usuários que utilizam este blog podem ter, ou não, interesse em criar posts',
            content:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dolor, fringilla eu eleifend non, hendrerit hendrerit orci. Proin vitae tincidunt metus, eget finibus elit. Maecenas dolor enim, commodo vitae suscipit eu, laoreet et eros. Quisque ornare sodales ante dignissim pharetra. Suspendisse in nisi dui. Donec ut luctus magna, quis porta ipsum. Mauris hendrerit sit amet nibh vel venenatis. Quisque accumsan tortor id consectetur blandit. Ut eget maximus velit, ac imperdiet orci. Mauris auctor, eros ac gravida tincidunt, risus velit porta arcu, ac sollicitudin dui est nec leo. Vivamus tristique egestas venenatis. Sed venenatis eleifend risus vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ac tellus pharetra, efficitur tortor et, pharetra ex. Nam pulvinar odio ut nisl viverra tincidunt. Ut scelerisque augue ex, at gravida sem ultrices et. Vivamus sit amet mi nibh. Nullam lacinia velit laoreet libero lobortis tincidunt ut a ex. Nunc auctor hendrerit risus. Donec risus mauris, interdum non ligula ac, tristique ornare justo. Curabitur vel tortor ac libero interdum finibus eu vel urna. Fusce tempor, lacus id efficitur convallis, neque massa pharetra sem, id maximus ligula libero at libero. Cras ipsum quam, lobortis in elit at, tincidunt pellentesque mauris. Aliquam dapibus orci ut blandit tempor. Morbi consectetur dapibus massa id cursus. Quisque vel mollis sapien. Suspendisse scelerisque pellentesque ipsum at ultrices. Fusce in ligula accumsan, maximus eros ut, porttitor nunc. Ut in mi neque. Sed sollicitudin consequat turpis, non congue arcu finibus vitae. Phasellus in vestibulum risus. Donec lacus est, scelerisque vulputate tellus at, suscipit porta dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tincidunt ultrices est, nec accumsan quam bibendum sed. Praesent ac condimentum magna. Fusce vel maximus nisi. Quisque nec arcu blandit, rhoncus risus vitae, convallis augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel ultricies purus. Aliquam vulputate ullamcorper dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec lobortis dictum enim quis porttitor. Suspendisse augue augue, facilisis vitae bibendum nec, viverra nec metus. In vel nisl nec ipsum vestibulum interdum vel eget lorem. Duis suscipit, ante at sagittis blandit, massa nunc elementum urna, et accumsan arcu massa non dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
            isCollapsed: false,
          },
        ],
      },
    ];

    state = {
      entities: users.reduce(
        (entityMap, user) => ({
          ...entityMap,
          [user.id]: user,
        }),
        {}
      ),
      ids: users.map((user) => user.id),
      loaded: true,
    };
  });

  describe('selectUsersLoaded', () => {
    it('should return a boolean or undefined', () => {
      expect(PostSelectors.selectUsersLoaded.projector(true)).toBeTruthy;
      expect(PostSelectors.selectUsersLoaded.projector(false)).toBeFalsy;
      expect(PostSelectors.selectUsersLoaded.projector()).toBe(undefined);
    });
  });

  describe('selectUsers', () => {
    it('should return correct number of entities', () => {
      const allPosts = PostSelectors.selectUsers.projector(state);
      expect(allPosts.length).toBe(2);
    });
  });

  describe('selectUsersEntity', () => {
    it('should return the correct id', () => {
      const selectedUsers = PostSelectors.selectUsersEntity.projector(state);
      expect((selectedUsers[5] as unknown as User).id).toEqual(5);
    });
  });

  describe('selectUsersError', () => {
    it('should return an error or undefined', () => {
      const error = 'Error loading...';
      expect(
        PostSelectors.selectUsersError.projector({ error: undefined })
      ).toBe(undefined);
      expect(PostSelectors.selectUsersError.projector({ error })).toBe(error);
    });
  });
});
