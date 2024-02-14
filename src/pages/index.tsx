import { Fragment, ReactElement, useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import RootLayout from '@/layouts/root-layout';
import MainLayout from '@/layouts/main-layout';
import { DateMultiplePicker, DatePicker, DateRangePicker } from '@/components/shared';
import { DateRange } from 'react-day-picker';
import Alert from '@/components/shared/alert';
import { Button, Input, cn, Image } from '@nextui-org/react';
import apiBase from '@/api/base';
import useLoaderGlobal from '@/hooks/useLoaderGlobal';
import Container from '@/components/shared/container';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {}

const Home = (props: Props) => {
  const [scaleWidth, setScaleWidth] = useState(5)
  const [scaleHeight, setScaleHeight] = useState(3)
  const [scaleText, setScaleText] = useState(1)
  const [isYes, setIsYes] = useState(false)
  const [aniText, setAniText] = useState(<h1 className='text-xl font-medium my-10'>OH OKAY</h1>)
  const addScale = () => {
    setScaleWidth(scaleWidth * 1.3)
    setScaleHeight(scaleHeight * 1.3)
    setScaleText(scaleText * 1.4)
  }

  useEffect(() => {
    if (isYes) {
      animetionText()
    }
  }, [isYes])

  const animetionText = () => {
    setTimeout(() => {
      setAniText(
        <h1 className='text-xl font-medium my-10'>AND</h1>
      )
      setTimeout(() => {
        setAniText(
          <Fragment>
            <div className='flex gap-2 items-center'>
              <h1 className='text-xl font-medium my-10'>I LOVE YOU PIMPHIMON</h1>
              <Icon icon="bi:heart-fill" className='text-danger text-2xl' />
            </div>
          </Fragment>
        )
      }, 1000);
    }, 1000);

  }

  return (
    <Fragment>
      {!isYes ?
        <Container className='items-center my-10 overflow-hidden'>
          <Image width={300} src="images/jump-bear.gif" />
          <h1 className='text-xl font-medium my-10'>WILL YOU BE MY VALENTINE?</h1>
          <div className='flex justify-center gap-4'>
            <Button
              radius='sm'
              color='success'
              style={{
                width: `${scaleWidth}rem`,
                height: `${scaleHeight}rem`,
                fontSize: `${scaleText}rem`,
              }}
              onClick={() => setIsYes(true)}
              className='font-bold'
            >
              YES
            </Button>
            <Button
              radius='sm'
              color='danger'
              style={{
                width: `5rem`,
                height: `3rem`,
                fontSize: `1rem`,
              }}
              onClick={addScale}
            >
              NO
            </Button>
          </div>
        </Container> :
        <Container className='items-center my-10 overflow-hidden'>
          <Image width={300} src="images/bear-kiss-bear-kisses.gif" />
          {aniText}
        </Container>}
    </Fragment>
  )
}
export default Home

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        {page}
      </RootLayout>
    </Fragment>
  );
};
