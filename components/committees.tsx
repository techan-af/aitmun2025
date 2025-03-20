import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Committees() {
  const committees = [
    {
      id: "unsc",
      name: "United Nations Security Council",
      description:
        `Addressing nuclear proliferation in the Middle East, focusing on Iran’s nuclear program and regional security dynamics.
`,
      image: "./images/unsc.png",
    },
    {
      id: "unhrc",
      name: "United Nations Human Rights Council",
      description:
        "Human rights situation in Israeli settlements in Occupied Palestinian Territory, including East Jerusalem, and in the occupied Syrian Golan.",
      image: "./images/unhrc.png",
    },
    {
      id: "unodc",
      name: "United Nations Office on Drugs and Crime",
      description:
        "Tackling the proliferation of synthetic opioid trafficking, with an emphasis on fentanyl production in Mexico.",
      image: "./images/unodc.png",
    },
    {
      id: "aippm",
      name: "All India Political Parties Meet",
      description: "Censorship laws in India, with a special focus on digital content regulation under the IT Act, 2000, and Article 19 of the Constitution.iscussing India's role during World War II and its path to independence in the post-war era.",
      image: "./images/aippm.png",
    },
    {
      id: "ip",
      name: "International Press",
      description: "Be on the frontlines of journalism as history takes shape",
      image: "./images/ip.png",
    },
    {
      id: "uncsw",
      name: "UN Commission on Status of Women",
      description:
        `Advancing Global Gender Equality: Addressing State Regulation of Women’s Attire and Mitigating the Escalation of Intimate Partner Violence in the world.`,
      image: "./images/uncsw.png",
    },
  ]

  return (
    <section id="committees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">Our Committees</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
          Delve into our six specialized committees, each meticulously designed to dissect pivotal facets of World War II and their enduring influence on contemporary global governance and international relations.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee) => (
            <Card
              key={committee.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={committee.image || "/placeholder.svg"}
                  alt={committee.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="bg-theme-navy text-white">
                <CardTitle>{committee.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-600">{committee.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

