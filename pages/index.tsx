"use client";

/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Personalize from "@contentstack/personalize-edge-sdk";
import { getPage, PersonalizeContext } from "../lib/contentstack";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import PersonalizeButton from "../components/PersonalizeButton";
import { Page } from "../lib/types";

const Home: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState<Page>();
  const variantParam = decodeURIComponent(
    router.query.personalize_variants as string
  );

  const getContent = async () => {
    const page = await getPage("/", variantParam);
    setPage(page);
  };

  const PersonalizeInstance = useContext(PersonalizeContext);

  useEffect(() => {
    ContentstackLivePreview.onEntryChange(getContent);

    // send Personalize analytics impression for the experience with shortID '0'.
    // see: Contentstack Dashboard > Personalize project > Experiences > Experience
    PersonalizeInstance.triggerImpression("0");
  }, []);

  const debug = {
    variantParam,
    variantAlias:
      Personalize.variantParamToVariantAliases(variantParam).join(","),
  };

  return (
    <>
      <Head>
        <title>Next.js 12 Starter</title>
        <meta name="description" content="Next.js 12 starter template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-2xl mx-auto">
        <section className="p-4">
          {variantParam ? (
            <div className="mb-8">
              <p>Some debug info</p>
              <pre>{JSON.stringify(debug, null, 2)}</pre>
            </div>
          ) : null}

          <div className="mb-8 space-y-4">
            <PersonalizeButton type="Marketer" />
            <PersonalizeButton type="Developer" />
            <PersonalizeButton type="Reset" />
          </div>

          {page?.title ? (
            <h1
              className="text-4xl font-bold mb-4"
              {...(page?.$ && page?.$.title)}
            >
              {page?.title}
            </h1>
          ) : null}

          {page?.description ? (
            <p className="mb-4" {...(page?.$ && page?.$.description)}>
              {page?.description}
            </p>
          ) : null}

          {page?.image ? (
            <img
              className="mb-4"
              width={640}
              height={360}
              src={page?.image.url}
              alt={page?.image.title}
              {...(page?.image?.$ && page?.image?.$.url)}
            />
          ) : null}

          {page?.rich_text ? (
            <div
              {...(page?.$ && page?.$.rich_text)}
              dangerouslySetInnerHTML={{ __html: page?.rich_text }}
            />
          ) : null}
        </section>
      </main>
    </>
  );
};

export default Home;
