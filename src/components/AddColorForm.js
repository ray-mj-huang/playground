import { useInput } from './hooks';

export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("000000")

  // const susbmit = event => {}

  // return ()
}
