import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Ici, vous pourriez implémenter l'envoi d'email ou l'enregistrement dans une base de données
    console.log("Contact form submission:", data)

    // Simuler un délai de traitement
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès!",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 },
    )
  }
}
