import medals from "@/public/medals.json";

export async function GET() {
  try {
    return new Response(JSON.stringify(medals), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Failed to load medals data." }),
      {
        status: 500,
      }
    );
  }
}
