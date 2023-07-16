import TextWithImage from '../components/TextWithImage'
import Hero from '../components/hero'
import Footer from '../components/footer'
import React from 'react'
import Popup from '../components/popup'
import Newsletter from '../components/Newsletter'

export const buttonClass =
  'border-black border min-w-[150px] text-center text-black p-2 hover:bg-black hover:text-white transition-colors duration-300 mr-2'

export default function IndexPage() {
  const paragraphClass =
    'mb-4'

  return (
    <main className="top-28 relative md:top-0">
      {/* <Popup /> */}
      <Hero
        backgroundImage="/hero.jpg"
        button={{
          text: 'Book a Consultation / Reserva tu consulta',
          link: process
            .env
            .calendly,
        }}
      />
      <section className="bg-[#f4f4f4] text-black flex items-center justify-center h-48">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">
            I am looking
            to
          </h2>
          <div className="flex items-center mt-4">
            <a
              className={
                buttonClass
              }
              href="/selling"
            >
              List a Home
            </a>
            <a
              className={
                buttonClass
              }
              href="/buying"
            >
              Buy a Home
            </a>
          </div>
        </div>
      </section>
      <iframe
        src={
          process.env
            .publicCollection
        }
        width="100%"
        height="1000"
      ></iframe>
      <TextWithImage
        title={`About ${process.env.name}`}
        image="/maria.jpg"
        alt={
          process.env
            .name
        }
      >
        <>
          <p
            className={
              paragraphClass
            }
          >
            Originally
            from Sonora,
            Mexico, Maria
            was brought
            to the
            Central
            Valley when
            she was a
            toddler. As a
            bilingual
            woman, this
            savvy realtor
            takes great
            pride in her
            Mexican
            heritage and
            her extensive
            knowledge of
            the Central
            Valley region
            as well.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Maria is
            inspired by
            helping her
            community
            members
            attain the
            American
            Dream of
            owning their
            own home. She
            is determined
            to provide
            her clients
            with
            first-class
            customer
            service as
            she guides
            them through
            the process.
            Clients are
            ensured of a
            clear
            understanding every
            step of the
            way.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Ms. Garcia
            possesses
            grit and the
            devotion
            needed to
            assist with
            her client’s
            needs and
            help them to
            realize their
            dreams and
            successfully
            attain them.
            She is
            consistently
            up for a
            challenge and
            the art of
            negotiation
            helps flex
            her
            homebuying or
            selling
            muscles.
            Maria enjoys
            working with
            like-minded
            clients who
            share the
            same
            respectful
            values in
            each
            transaction.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Her charisma
            and loyalty
            are the two
            characteristics
            attributing
            to her
            success. Ms.
            Garcia is
            humbled that
            her business
            is mostly
            referral-based,
            and that her
            passion for
            helping
            others is
            what has
            turned a
            considerable
            number of
            clients into
            long-term
            friends. 
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Clients
            describe
            Maria as
            friendly,
            unassuming,
            patient and a
            delight to
            work with.{' '}
          </p>
          <p
            className={
              paragraphClass
            }
          >
            In what spare
            time Maria
            might have,
            she enjoys
            good food and
            being
            surrounded by
            family and
            friends.
          </p>
          <p
            className={`${paragraphClass} mt-16`}
          >
            Originaria de
            Sonora,
            México, María
            fue traída al
            Valle Central
            cuando era
            una niña
            pequeña. Como
            mujer
            bilingüe,
            esta astuta
            agente de
            bienes raíces
            se
            enorgullece
            de su
            herencia
            mexicana y de
            su amplio
            conocimiento
            de la región
            del Valle
            Central.
            María se
            inspira en
            ayudar a los
            miembros de
            su comunidad
            a alcanzar el
            sueño
            americano de
            ser dueños de
            su propia
            casa. Está
            decidida a
            proporcionar
            a sus
            clientes un
            servicio de
            primera clase
            mientras los
            guía a través
            del proceso.
            Los clientes
            tienen la
            seguridad de
            comprender
            claramente
            cada paso del
            camino.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Maria posee
            determinación
            y devoción
            necesarias
            para ayudar a
            sus clientes
            y ayudarles a
            realizar sus
            sueños y
            alcanzarlos
            con éxito.
            Siempre está
            dispuesta a
            enfrentar
            desafíos y el
            arte de la
            negociación
            le ayuda a
            fortalecer
            sus
            habilidades
            para comprar
            o vender
            viviendas.
            María
            disfruta
            trabajar con
            clientes
            afines que
            comparten los
            mismos
            valores de
            respeto en
            cada
            transacción.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Su carisma y
            lealtad son
            las dos
            características
            que
            contribuyen a
            su éxito.
            Maria se
            siente
            honrada de
            que su
            negocio se
            base
            principalmente
            en
            referencias y
            que su pasión
            por ayudar a
            los demás
            haya
            convertido a
            muchos
            clientes en
            amigos a
            largo plazo.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            Los clientes
            describen a
            María como
            amigable,
            modesta,
            paciente y un
            placer
            trabajar con
            ella.
          </p>
          <p
            className={
              paragraphClass
            }
          >
            En el poco
            tiempo libre
            que María
            pueda tener,
            disfruta de
            buena comida
            y estar
            rodeada de
            familia y
            amigos.
          </p>
        </>
      </TextWithImage>
      <Newsletter />
    </main>
  )
}
