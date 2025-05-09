import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-lg max-w-none">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <h2>Introduction</h2>
          <p>
            Bienvenue dans la politique de confidentialité de Wolf IA – Conversez partout. Cette politique explique
            comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre
            application mobile.
          </p>

          <h2>Collecte d'informations</h2>
          <p>Nous collectons les types d'informations suivants :</p>
          <ul>
            <li>
              <strong>Informations personnelles</strong> : Aucune information personnelle n'est collectée, 
              l'application mobile est utilisable directement sans créer de compte.
            </li>
            <li>
              <strong>Données d'utilisation</strong> : Nous envoyons seulement les messages envoyés par l'utilisateur à l'assistant IA.
            </li>
            <li>
              <strong>Informations sur l'appareil</strong> : Nous collectons pas les informations sur votre appareil mobile,
              tel que le modèle, le système d'exploitation.
            </li>
          </ul>

          <h2>Utilisation des informations</h2>
          <p>Nous utilisons les informations collectées pour :</p>
          <ul>
            <li>Fournir, maintenir et améliorer notre application</li>
            <li>Personnaliser votre expérience</li>
            <li>Améliorer les capacités de notre assistant IA</li>
            <li>Communiquer avec vous concernant l'application</li>
            <li>Détecter et prévenir les activités frauduleuses</li>
          </ul>

          <h2>Partage des informations</h2>
          <p>
            Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations dans les
            circonstances suivantes :
          </p>
          <ul>
    
            <li>Pour se conformer aux obligations légales</li>
            <li>Pour protéger nos droits et ceux des autres</li>
          </ul>

          <h2>Sécurité des données</h2>
          <p>
            Nous prenons des mesures raisonnables pour protéger vos informations contre l'accès, l'utilisation ou la
            divulgation non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage
            électronique n'est totalement sécurisée.
          </p>

          <h2>Vos droits</h2>
          <p>
            Selon votre lieu de résidence, vous pouvez avoir certains droits concernant vos informations personnelles,
            notamment :
          </p>
          <ul>
            <li>Accéder à vos informations personnelles</li>
            <li>Corriger des informations inexactes</li>
            <li>Supprimer vos informations</li>
            <li>Restreindre ou s'opposer au traitement</li>
            <li>Transférer vos informations</li>
          </ul>

          <h2>Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de
            tout changement important en publiant la nouvelle politique de confidentialité sur cette page.
          </p>

          <h2>Contact</h2>
          <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :</p>
          <p>wolf.ia.app@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
