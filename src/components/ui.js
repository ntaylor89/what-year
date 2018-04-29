import system from 'system-components'

const Dd = system(props => ({
  is: 'dd',
  color: props.color,
  ...(props.center && { textAlign: 'center' })
}))

const Dl = system({ is: 'dl' })

const Dt = system(props => ({
  is: 'dt',
  display: props.display
}))

const Footer = system({
  is: 'footer',
  py: 4
})

const Header = system({ is: 'header', pb: 4 })

const Nav = system({
  is: 'nav',
  ml: 'auto'
})

export { Dd, Dl, Dt, Footer, Header, Nav }
