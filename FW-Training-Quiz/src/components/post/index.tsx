'use client'
import Image from "next/image";
import {
    Divider,
    Icon,
}from '@chakra-ui/react'
import{
    BsChevronLeft,
  }from 'react-icons/bs'

interface PostProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  date: string;
  writer: string;
  content: any;
}

export function Post(props: PostProps) {
  const { title, content, bannerImage, bannerImageWidth, bannerImageHeight, date, writer } =
    props;

  return (
    <>
    <a href='/newsroom' className="text-2xl hover:underline hover:italic px-6 md:px-64">Newsroom</a>
    <div className="pt-20 px-6 md:px-64">
    <h1 className="text-6xl text-black mb-8 text-left">{title}</h1>
    <h1 className="text-xl text-black">{date}</h1>
    <h1 className="text-xl text-black">{writer}</h1>
    <Divider className="pt-12"/>
    </div>
    <article className="w-screen mb-10 flex flex-col items-center pt-20 px-6 md:px-64">
        <Image
        alt="Blog Image"
        src={bannerImage}
        // width={bannerImageWidth}
        width={"800"}
        height={bannerImageHeight}
        className="[width: 800px]! pb-12 items-center"
      />
      <div
        className="text-lg md:text-xl w-screen px-6 md:px-64"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
    <Divider className="pt-12"/>
    
    </>
  );
}