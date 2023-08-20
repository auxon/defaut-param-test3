export default function Home() {
  const handleSend = async (message: string, deleteCount: number = 0) => {
    console.log('handleSend', message, deleteCount);
  }
  return (
    <main>
      <div>
        <button onClick={async () => await handleSend('test', 0)}>
          Send
        </button>
      </div>
    </main>
  )
}
