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
            Bienvenue dans la politique de confidentialité de Wolf AI – Conversez partout. Cette politique explique
            comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre
            application mobile.
          </p>

          <h2>Collecte d'informations</h2>
          <p>Nous collectons les types d'informations suivants :</p>
          <ul>
            <li>
              <strong>Informations personnelles</strong> : Lorsque vous créez un compte, nous pouvons collecter votre
              nom, adresse e-mail et autres informations de profil.
            </li>
            <li>
              <strong>Données d'utilisation</strong> : Nous recueillons des informations sur la façon dont vous
              interagissez avec notre application, y compris les conversations avec l'assistant Wolf AI.
            </li>
            <li>
              <strong>Informations sur l'appareil</strong> : Nous collectons des informations sur votre appareil mobile,
              y compris le modèle, le système d'exploitation et les identifiants uniques.
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
            <li>Avec des fournisseurs de services qui nous aident à exploiter notre application</li>
            <li>Pour se conformer aux obligations légales</li>
            <li>Pour protéger nos droits et ceux des autres</li>
            <li>Dans le cadre d'une fusion, vente ou transfert d'actifs</li>
          </ul>

          <h2>Sécurité des données</h2>
          <p>
            Nous prenons des mesures raisonnables pour protéger vos informations contre l'accès, l'utilisation ou la
            divulgation non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage
            électronique n'est totalement sécurisée. blabblablablabla.
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
          <p>assistancewolfia@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
