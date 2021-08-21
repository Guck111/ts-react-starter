import { useState } from "react"
import { useStore } from "effector-react"
import { $users, addUserFx } from "models/users"
import styled from "@emotion/styled"
import tw from "twin.macro"

type Props = {
  title: string
}

export const Users = ({ title }: Props) => {
  const users = useStore($users)
  const [name, setName] = useState("")

  return (
    <>
      <h1>{title}</h1>
      <h3>Environmental variables:</h3>
      <p>
        process.env.PROJECT_NAME: <b>{process.env.PROJECT_NAME}</b>
      </p>
      <Wrap>
        {users.map(({ name, id }) => (
          <Row key={id}>
            {id + 1}: {name}
          </Row>
        ))}
      </Wrap>
      <Input
        type="text"
        placeholder="type"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SimpleButton
        onClick={() => {
          addUserFx(name)
          setName("")
        }}
      >
        Add user
      </SimpleButton>
    </>
  )
}

const Wrap = styled.div`
  border: 1px solid #eee;
`

const Row = styled.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
`

const Button = tw.div`
	flex
	inline-flex
	items-center
	border
	text-xs
	font-medium
	rounded
	shadow-sm
	text-white
	cursor-pointer
	bg-red-600
	hover:bg-indigo-700
	focus:outline-none
`

const SimpleButton = styled(Button)`
  padding: 12px 20px;
`

const Input = styled.input`
  padding: 9px;
  border: 2px solid #333;
  border-radius: 5px;
  margin-right: 12px;
`
