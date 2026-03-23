import Container from "../ui/Container"

export default function VideoSection() {
  return (
    <section className="py-8">
      <Container>
        <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Apresentação"
          />
        </div>
      </Container>
    </section>
  )
}