import React, { Component } from "react"
import { connect } from "react-redux"
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/users-reducer"
import axios from "axios"
import { Users } from "./Users"
import { RootState } from "@redux/store"

type User = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | boolean
  followed: boolean
}

type UsersResponse = {
  data: {
    items: User[]
    totalCount: number
  }
}

type Props = {
  totalUsersCount: number
  pageSize: number
  users: User[]
  currentPage: number
  unfollow: (users: number) => void
  follow: (userId: number) => void
  setUsers: (users: User[]) => void
  setTotalUsersCount: (count: number) => void
  setCurrentPage: (pageNumber: number) => void
}

class UsersAPI extends Component<Props> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response: UsersResponse) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response: UsersResponse) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    )
  }
}

export const UsersContainer = connect(
  (state: RootState) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }),
  (dispatch) => ({
    follow: (userId: number) => dispatch(followAC(userId)),
    unfollow: (userId: number) => dispatch(unfollowAC(userId)),
    setUsers: (users: User[]) => dispatch(setUsersAC(users)),
    setCurrentPage: (pageNumber: number) =>
      dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: (totalCount: number) =>
      dispatch(setTotalUsersCountAC(totalCount)),
  })
)(UsersAPI)
