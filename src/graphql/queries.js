/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPartida = /* GraphQL */ `
  query GetPartida($id: ID!) {
    getPartida(id: $id) {
      id
      mix1
      mix2
      mix3
      mix4
      numJugadores
      codPartida
      iniciado
      finalizado
      hora
      controlPartida {
        idJugador
        nombreJugador
        puntajeMix1
        puntajeMix2
        puntajeMix3
        puntajeMix4
        horaActualizacion
        ipJugador
        abandonado
        finalizado
        posicion
        __typename
      }
      nombreUserCreador
      idUserCreador
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPartidas = /* GraphQL */ `
  query ListPartidas(
    $filter: ModelPartidaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartidas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mix1
        mix2
        mix3
        mix4
        numJugadores
        codPartida
        iniciado
        finalizado
        hora
        controlPartida {
          idJugador
          nombreJugador
          puntajeMix1
          puntajeMix2
          puntajeMix3
          puntajeMix4
          horaActualizacion
          ipJugador
          abandonado
          finalizado
          posicion
          __typename
        }
        nombreUserCreador
        idUserCreador
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPartidas = /* GraphQL */ `
  query SyncPartidas(
    $filter: ModelPartidaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPartidas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mix1
        mix2
        mix3
        mix4
        numJugadores
        codPartida
        iniciado
        finalizado
        hora
        controlPartida {
          idJugador
          nombreJugador
          puntajeMix1
          puntajeMix2
          puntajeMix3
          puntajeMix4
          horaActualizacion
          ipJugador
          abandonado
          finalizado
          posicion
          __typename
        }
        nombreUserCreador
        idUserCreador
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const partidasByUserID = /* GraphQL */ `
  query PartidasByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPartidaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    partidasByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mix1
        mix2
        mix3
        mix4
        numJugadores
        codPartida
        iniciado
        finalizado
        hora
        controlPartida {
          idJugador
          nombreJugador
          puntajeMix1
          puntajeMix2
          puntajeMix3
          puntajeMix4
          horaActualizacion
          ipJugador
          abandonado
          finalizado
          posicion
          __typename
        }
        nombreUserCreador
        idUserCreador
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      Partidas {
        items {
          id
          mix1
          mix2
          mix3
          mix4
          numJugadores
          codPartida
          iniciado
          finalizado
          hora
          nombreUserCreador
          idUserCreador
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Partidas {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Partidas {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
