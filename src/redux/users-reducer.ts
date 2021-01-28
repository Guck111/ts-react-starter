const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

const initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
}

type Action = {
  type: string
  payload: any
}

export const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }

    case SET_USERS:
      return { ...state, users: action.payload.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.payload.totalCount }

    default:
      return state
  }
}

export const followAC = (userId: number) => ({
  type: FOLLOW,
  payload: {
    userId,
  },
})

export const unfollowAC = (userId: number) => ({
  type: UNFOLLOW,
  payload: {
    userId,
  },
})

export const setUsersAC = (users: {}[]) => ({
  type: SET_USERS,
  payload: {
    users,
  },
})

export const setCurrentPageAC = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  payload: {
    currentPage,
  },
})

export const setTotalUsersCountAC = (totalCount: number) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: {
    totalCount,
  },
})
