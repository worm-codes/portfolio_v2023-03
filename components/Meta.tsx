import Head from 'next/head';

interface MetaProps {
  title: string;
  description?: string;
}

function Meta({ title, description }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          content={description}
        />
      )}
    </Head>
  );
}
export default Meta;
