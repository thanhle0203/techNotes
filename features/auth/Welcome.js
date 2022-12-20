import { Link } from "react-router-dom"

const Welcome = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long'}).format(date)

  const content = (
    <section className="welcome">
        <p>{today}</p>
        <h1>Welcome!</h1>
        <p><Link to="/dash/notes">View teachNotes</Link></p>
        <p><Link to="/dash/users">View User Settings</Link></p>
    </section>
  )

  return (
    <div>Welcome</div>
  )
}

export default Welcome