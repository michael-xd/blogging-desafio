import { Post } from './posts.models';
import { State } from './posts.reducer';
import * as PostSelectors from './posts.selectors';

describe('Posts Selectors', () => {
  let posts: Post[];
  let state: State;

  beforeEach(() => {
    posts = [
      {
        id: 1,
        timestamp: '2019-02-20T13:22Z',
        author: {
          id: 1,
          username: 'João Figueiredo',
        },
        title: 'Estratégias em um novo paradigma globalizado',
        subtitle:
          'Sobre o cuidado em identificar pontos críticos na complexidade',
        content:
          '<p>Caros amigos, a mobilidade dos capitais internacionais desafia a capacidade de equalização das diversas correntes de pensamento. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a necessidade de renovação processual ainda não demonstrou convincentemente que vai participar na mudança das diretrizes de desenvolvimento para o futuro. O cuidado em identificar pontos críticos na complexidade dos estudos efetuados é uma das consequências das direções preferenciais no sentido do progresso. Do mesmo modo, a adoção de políticas descentralizadoras não pode mais se dissociar dos modos de operação convencionais.</p>',
        comments: [
          {
            id: 1,
            respondsTo: null,
            author: {
              id: 2,
              username: 'Joana Vasconcellos',
            },
            timestamp: '2019-02-20T20:30Z',
            content:
              'O empenho em analisar a consolidação das estruturas oferece uma interessante oportunidade para verificação do retorno esperado a longo prazo. Por outro lado, o julgamento imparcial das eventualidades facilita a criação dos modos de operação convencionais. O que temos que ter sempre em mente é que a revolução dos costumes estimula a padronização das novas proposições.',
          },
          {
            id: 2,
            respondsTo: null,
            author: {
              id: 3,
              username: 'Arthur Silveira',
            },
            timestamp: '2019-02-17T11:23Z',
            content:
              'É importante questionar o quanto o consenso sobre a necessidade de qualificação possibilita uma melhor visão global dos índices pretendidos.',
          },
          {
            id: 3,
            respondsTo: {
              id: 2,
            },
            author: {
              id: 4,
              username: 'Clara Passos',
            },
            timestamp: '2019-02-23T07:48Z',
            content:
              'Ainda assim, existem dúvidas a respeito de como a execução dos pontos do programa representa uma abertura para a melhoria da gestão inovadora da qual fazemos parte.',
          },
          {
            id: 4,
            respondsTo: {
              id: 3,
            },
            author: {
              id: 5,
              username: 'Mauro Andrade',
            },
            timestamp: '2019-02-28T07:08Z',
            content: 'Concordo plenamente, Clara!',
          },
          {
            id: 5,
            respondsTo: {
              id: 3,
            },
            author: {
              id: 6,
              username: 'Rafaela Moreira',
            },
            timestamp: '2019-02-28T08:21Z',
            content: 'Discordo veementemente, Clara!',
          },
        ],
      },
    ];

    state = {
      entities: posts.reduce(
        (entityMap, post) => ({
          ...entityMap,
          [post.id]: post,
        }),
        {}
      ),
      ids: posts.map((post) => post.id),
      loaded: true,
    };
  });

  describe('selectPostsLoaded', () => {
    it('should return a boolean or undefined', () => {
      expect(PostSelectors.selectPostsLoaded.projector(true)).toBeTruthy;
      expect(PostSelectors.selectPostsLoaded.projector(false)).toBeFalsy;
      expect(PostSelectors.selectPostsLoaded.projector()).toBe(undefined);
    });
  });

  describe('selectAllPosts', () => {
    it('should return correct number of entities', () => {
      const allPosts = PostSelectors.selectPosts.projector(state);
      expect(allPosts.length).toBe(1);
    });
  });

  describe('selectPostsEntity', () => {
    it('should return the correct id', () => {
      const selectedPosts = PostSelectors.selectPostsEntity.projector(state);
      expect((selectedPosts[1] as unknown as Post).id).toEqual(1);
    });
  });

  describe('selectPostsError', () => {
    it('should return an error or undefined', () => {
      const error = 'Error loading...';
      expect(
        PostSelectors.selectPostsError.projector({ error: undefined })
      ).toBe(undefined);
      expect(PostSelectors.selectPostsError.projector({ error })).toBe(error);
    });
  });
});
