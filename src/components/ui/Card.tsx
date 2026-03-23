export default function Card({ text }: { text: string }) {
  return <div style={styles.card}>{text}</div>
}

const styles = {
  card: {
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px"
  }
}