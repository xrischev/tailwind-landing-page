import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);
  const openMenu = (menu) => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="md:bg-[url('/components/background-1-section.svg')]  max-[768px]:bg-[url('public/mobile/mobile-sec-1.svg')] max-[768px]:bg-cover">
        <div className="md:bg-[url('public/components/component-section-1-background.svg')] bg-no-repeat max-[768px]:mb-[-60px]">
          <nav className="pl-0 py-8 sm:px-12">
            <div className="mx-auto">
              <nav className="relative z-50 flex max-[1024px]:justify-center lg:justify-between">
                <div className="contents items-center md:gap-x-12">
                  <a aria-label="Home" href="/#">
                    <img
                      className="ml-8 sm:mt-0 sm:w-auto sm:ml-0 relative max-[600px]:w-[75%] max-[600px]:ml-[15%] max-[600px]:top-[20px]"
                      src="head/logo.svg"
                    />
                  </a>

                  <div className="hidden lg:flex md:gap-x-6">
                    <a
                      className="inline-block not-italic font-normal text-lg font-['Gill_Sans']"
                      href="/#features"
                    >
                      Curated Boxes
                    </a>
                    <a
                      className="inline-block not-italic font-normal text-lg font-['Gill_Sans']"
                      href="/#features"
                    >
                      A La Carte
                    </a>
                    <a
                      className="inline-block not-italic font-normal text-lg font-['Gill_Sans']"
                      href="/#features"
                    >
                      Our Story
                    </a>
                    <a
                      className="inline-block not-italic font-normal text-lg font-['Gill_Sans']"
                      href="/#features"
                    >
                      {' '}
                      Recipes & More
                    </a>

                    <a
                      className="inline-block not-italic font-normal text-lg font-['Gill_Sans']"
                      href="/#features"
                    >
                      {' '}
                      My Account
                    </a>

                    <a
                      className="inline-block not-italic font-normal text-lg font-['Gill_Sans']"
                      href="/#features"
                    >
                      Cart
                    </a>

                    <a className="inline-block not-italic font-normal text-lg font-['Gill_Sans']">
                      <img
                        className="relative w-[70%] right-[20px]"
                        src="public/head/cart-head.svg"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-x-5 md:gap-x-8 absolute left-0 sm:bottom-[-15px]">
                  <div className="-mr-1 lg:hidden">
                    <div data-headlessui-state="">
                      <button
                        id="menu-button"
                        onClick={() => openMenu(menu)}
                        className="relative z-10 flex h-14 w-14 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none bg-[url('../public/mobile/menu-bg.png')]"
                        aria-label="Toggle Navigation"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                          fill="none"
                          stroke-width="2"
                          stroke-linecap="round"
                        >
                          <path
                            d="M0 1H14M0 7H14M0 13H14"
                            className="origin-center transition"
                          ></path>
                          <path
                            d="M2 2L12 12M12 2L2 12"
                            className="origin-center transition scale-90 opacity-0"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <img
                  className="absolute ml-2 lg:hidden h-10 w-8 rounded-none w-6 right-0 max-[768px]:mr-5 max-[611px]:top-2.5 max-[768px]:top-0"
                  src="mobile/empty-cart.svg"
                />
              </nav>
            </div>

            {menu ? (
              <div
                className="w-full md:flex md:items-center md:w-auto block absolute w-full bg-white pl-5 mt-10"
                id="menu"
              >
                <ul
                  className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between
              md:pt-0"
                >
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400"
                      href="#"
                    >
                      Curated Boxes
                    </a>
                  </li>
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400"
                      href="#"
                    >
                      A La Carte
                    </a>
                  </li>
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400"
                      href="#"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400"
                      href="#"
                    >
                      Recipes & More
                    </a>
                  </li>
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                      href="#"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                      href="#"
                    >
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ''
            )}
          </nav>

          <div className="md:flex flex-row mt-32 pb-34 container mx-auto max-[768px]:grid">
            <div className="max-[768px]:md:basis-basis-auto md:basis-1/2 sm:m-4 ">
              <div className="max-[1024px]:grid">
                <img
                  className="float-right mr-10 mt-8 float-right lg:w-3/5 max-[1024px]:w-96 max-[1024px]:m-auto"
                  src="components/left-slide-image.svg"
                />

                <div className="max-[1024px]:flex lg:hidden justify-center mt-5">
                  <img className="mr-5" src="mobile/arrow-left.svg" />
                  <img className="ml-5" src="mobile/arrow-right.png" />
                </div>

                <div className="float-right inline-grid max-[1024px]:hidden">
                  <img
                    className="float-right mr-10 w-1/5 mt-8 ml-[30%] cursor-pointer cursor-pointer"
                    src="components/section-1-arrow-up.svg"
                  />

                  <img
                    className="float-right mr-8 mt-4 cursor-pointer "
                    src="components/sec-1-first-image.svg"
                  />
                  <img
                    className="float-right mr-8 mt-4 cursor-pointer"
                    src="components/sec-1-image-2.svg"
                  />
                  <img
                    className="float-right mr-8 mt-4 cursor-pointer"
                    src="components/image-1-image-3.svg"
                  />

                  <img
                    className="float-right mr-8 mt-4 cursor-pointer"
                    src="components/section-1-image-4.svg"
                  />

                  <img
                    className="float-right mr-10 w-1/5 mt-4 ml-[30%] cursor-pointer"
                    src="components/arrow-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className="basis-1/2  max-[768px]:flex max-[768px]:flex-row-reverse max-[768px]:flex-col">
              <div className="grid-rows-1 max-[768px]:hidden">
                <div className="flex max-[768px]:justify-center">
                  <a href="">
                    <img src="sections/arrow-back.svg" />
                  </a>
                  <a className="ml-2" href="">
                    <img src="sections/button-back.svg" />
                  </a>
                </div>
              </div>

              <div className=" max-[768px]:order-[-7] max-[768px]flex">
                <div className="grid-rows-1 mt-4">
                  <h2 className="text-6xl font-medium leading-10 text-left font-['Melodrama'] leading-[4rem] max-[768px]:text-center">
                    Ibérico Box
                  </h2>
                </div>

                <div className="grid-rows-1 mt-3 flex max-[768px]:justify-center">
                  <img src="components/stars.svg" />
                  <img className="ml-1" src="components/stars.svg" />
                  <img className="ml-1" src="components/stars.svg" />
                  <img className="ml-1" src="components/stars.svg" />
                  <img className="ml-1" src="components/stars.svg" />

                  <span className="font-['Melodrama'] text-xl color-[#191411] ml-2 tracking-widest top-0.5">
                    265 reviews
                  </span>
                </div>
              </div>

              <div className="grid-rows-1 md:mt-8 flex max-[768px]:mt-12 max-[768px]:pb-64">
                <div
                  className="leading-7 max-w-xl
"
                >
                  <p className="text-left underline underline-offset-1 font-['Gill_Sans']">
                    {' '}
                    WHAT'S INSIDE
                  </p>
                  <p className="text-left">
                    {' '}
                    ~6* lb. limited-production Ibérico pork
                  </p>

                  <ul className="ml-10">
                    <li className="text-left list-disc text-sm">
                      <span className="font-medium">1 x (14–21oz) Secreto</span>{' '}
                      The best-kept “secret” cut, according to Spanish butchers.
                    </li>
                    <li className="text-left list-disc text-sm">
                      <span className="font-medium">
                        {' '}
                        1 x (24–33oz) 4-Rib Rack
                      </span>{' '}
                      Prime rib but make it Ibérico.
                    </li>
                    <li className="text-left list-disc text-sm">
                      <span className="font-medium">1 x (21–28oz) Presa</span>{' '}
                      The ultimate boneless roast.
                    </li>
                    <li className="text-left list-disc text-sm">
                      <span className="font-medium">
                        1 x (18–25oz) Abanico OR Pluma
                      </span>{' '}
                      Quick-cooking cuts with off-the-charts marbling. Pack
                      contains 2 steaks of Abanico or Pluma (depending on
                      stock).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-[768px]:order-[-4] max-[640px]:flex mt-10">
                <div className="grid-rows-1 md:mt-8 max-[640px]:mt-2 flex">
                  <div className="flex">
                    <img
                      className="max-[640px]:max-w-[20px] max-[640px]:hidden"
                      src="components/radio-button.svg"
                    />

                    <button className="sm:bg-[url('components/btn-radio-black-bg.svg')] bg-[url('mobile/bg-mobile-buttons-left.svg')] text-white bg-contain bg-no-repeat text-xl px-3 py-1 ml-2 max-[640px]:bg-cover max-[640px]:inline-flex">
                      <img
                        className="max-[640px]:max-w-[20px] max-[640px]:block sm:hidden mt-2"
                        src="mobile/mobile-button-light.svg"
                      />
                      <span className="text-[0.875rem]">
                        One-time purchase $169.00
                      </span>
                    </button>
                  </div>
                </div>

                <div className="grid-rows-1 mt-2 flex ">
                  <div className="flex">
                    <img
                      className="max-[640px]:max-w-[20px] max-[640px]:hidden"
                      src="components/btn-no-select.svg"
                    />

                    <button className="sm:bg-[url('components/btn-radio-bg-gray.svg')] bg-[url('mobile/bg-button-right.svg')] text-black bg-contain bg-no-repeat text-xl px-3 py-1 ml-2 max-[640px]:bg-cover max-[640px]:inline-flex ">
                      <img
                        className="max-[640px]:max-w-[20px] max-[640px]:block sm:hidden mt-2"
                        src="components/radio-button.svg"
                      />
                      <span className="text-[0.875rem]">
                        Subscribe & save 10% $269.10
                      </span>

                      <span className="text-[#C54B38] text-xl pt-1 pl-2 sm:hidden max-[640px]:block mt-[12%]">
                        Details
                      </span>
                    </button>

                    <span className="text-[#C54B38] text-xl pt-1 pl-2 max-[640px]:hidden">
                      Details
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid-rows-1 max-[768px]:flex md:hidden max-[768px]:order-[-3] mt-6">
                <a
                  className="ml-8 bg-[url('components/btn-add-card-bg.svg')] py-4 text-center min-w-[140px] xl:px-20 text-xl text-[#F2EFE1] bg-no-repeat w-full max-[768px]:ml-0 max-[768px]:bg-cover"
                  href=""
                >
                  Add To Cart
                </a>
              </div>

              <div className="grid-rows-1 mt-2 flex  max-[768px]:order-[-5]  max-[768px]:justify-center">
                <span className="text-5xl mt-10 text-[#191411] font-['Gill_Sans']">
                  $169
                </span>
              </div>

              <div className="grid-rows-1 max-[768px]:mt-6  md:mt-12 max-[768px]:order-[-6]">
                <div className="flex max-[768px]:flex-col">
                  <div className="text-base font-normal leading-6 text-left md:hidden text-center mb-2">
                    Quantity
                  </div>

                  <div className="flex max-[768px]:justify-center">
                    <a href="">
                      <img src="components/button-minus.svg" />
                    </a>

                    <a className="ml-2" href="">
                      <img src="components/button-line-y.svg" />
                    </a>

                    <a className="ml-2" href="">
                      <img src="components/button-plus.svg" />
                    </a>
                  </div>

                  <a
                    className="max-[768px]:hidden ml-8 bg-[url('components/btn-add-card-bg.svg')] py-4 text-center min-w-[140px] xl:px-20 text-xl text-[#F2EFE1] bg-no-repeat lg:bg-contain bg-auto"
                    href=""
                  >
                    Add To Cart
                  </a>

                  <a
                    className="ml-3 flex align-middle max-[768px]:hidden"
                    href=""
                  >
                    <img src="components/right-arrow-cart.svg" />
                  </a>
                </div>
              </div>

              <div className="grid-rows-1 mt-4  mt-10 max-[768px]:order-[-3] max-[768px]:block">
                <div className="flex max-[768px]:block">
                  <span className="md:text-xl text-base flex align-middle max-[768px]:text-center max-[768px]:m-auto max-[768px]:block">
                    Pay in 4 installments of $42.25 with
                  </span>

                  <div className="flex max-[768px]:justify-center md:mt-0 mt-2">
                    <span className="ml-2 max-[768px]:float-left">
                      <img src="components/shop-pay.svg" />
                    </span>

                    <span className="text-left underline underline-offset-1 font-['Gill_Sans'] text-xl ml-2 flex align-middle max-[768px]:float-left">
                      <a href=""> Learn more</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid-rows-1 mt-4 mt-10 sm:pb-16 lg:pb-16 xl:pb-32  max-[768px]:order-[-2]  max-[768px]:text-center">
                <p className="text-[#191411] text-base opacity-40 max-w-xl">
                  I understand this item will ship according to the terms
                  specified, which may include a deferred or recurring purchase.
                  By continuing, I agree to the cancellation policy and
                  authorize you to charge my payment method at the prices,
                  frequency and dates listed on this page until my order is
                  fulfilled or I cancel, if permitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFEF5] overflow-hidden max-[768px] max-[768px]:z-[-2] max-[768px]:relative max-[768px]:pt-14">
        <div className="text-6xl font-medium text-center font-['Melodrama'] leading-[4rem] pt-10">
          <div className="absolute lg:ml-60">
            <img
              className="w-4/5 ml-[20%] max-[768px]:w-6/12 max-[768px]:relative max-[768px]:ml-0 max-[768px]:left-[-13px] max-[768px]:bottom-[84px]"
              src="components/box.svg"
            />
          </div>

          <div className="text-6xl">
            <p className="max-[768px]:text-4xl">What’s Inside</p>
            <p className="max-[768px]:text-4xl">The Ibérico Box</p>
          </div>

          <p className="text-xl font-normal leading-8 text-center font-['Gill_Sans'] leading-[0.01em] mt-4 max-[768px]:text-base">
            Includes our best selling Ibérico Pork cuts
          </p>
        </div>

        <div className="grid md:grid-cols-4 md:gap-4 max-[768px]:grid-cols-2 max-[768px]:gap-2 sm:mx-10 lg:mx-60 mt-24 max-[768px]:relative">
          <div className="relative">
            <img
              className="absolute top-[35%] right-[-23px] z-[999] md:block max-[768px]:hidden"
              src="components/plus.png"
            />
            <div className="relative">
              <img
                className="w-[98%] md:h-[340px] md:min-h-[340px]  max-[768px]:min-h-[250px]"
                src="components/section-2-image-1.svg"
              />

              <div className="absolute top-0 right-0 h-full md:block max-[768px]:hidden">
                <img
                  className="h-[380px]"
                  src="components/section-2-right-border.png"
                />
              </div>
            </div>

            <div className="mr-1 md:pt-14 max-[768px]:pt-8">
              <p className="text-4xl font-medium leading-9 text-center font-['Melodrama'] relative bottom-9 max-[768px]:text-2xl">
                4 - Rib Rack
              </p>

              <p className="text-xl font-normal leading-8 font-['Melodrama'] text-center relative bottom-6 max-[768px]:text-xs max-[768px]:bottom-[35px]">
                (1 x 24–33 ounces)
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="absolute top-[35%] right-[-23px] z-[999] md:block max-[768px]:hidden"
              src="components/plus.png"
            />
            <div className="relative">
              <img
                className="w-[98%] md:h-[340px] md:min-h-[340px]  max-[768px]:min-h-[250px]"
                src="components/section-2-image-2.svg"
              />

              <div className="absolute top-0 right-0 h-full md:block max-[768px]:hidden">
                <img
                  className="h-[380px]"
                  src="components/section-2-right-border.png"
                />
              </div>
            </div>

            <div className="mr-1 md:pt-14 max-[768px]:pt-8">
              <p className="text-4xl font-medium leading-9 text-center font-['Melodrama'] relative bottom-9 max-[768px]:text-2xl">
                Abanico/Pluma
              </p>

              <p className="text-xl font-normal leading-8 font-['Melodrama'] text-center relative bottom-6 max-[768px]:text-xs max-[768px]:bottom-[35px]">
                (1 x 18–25 ounces)
              </p>
            </div>
          </div>

          <div className="md:hidden max-[768px]:block h-0.5 w-[92%] absolute top-[52%]">
            <img
              className="absolute z-[999] md:hidden max-[768px]:block left-[49%] w-[12%] bottom-[-24px]"
              src="components/plus.png"
            />
            <img className="max-[768px]:bg-[url('mobile/horizontal-mobile-1.svg') w-11/12 ml-[10%] h-full bg-[#C54B38]" />
          </div>

          <div className="md:hidden max-[768px]:block w-0.5 absolute top h-full left-1/2">
            <img className="max-[768px]:bg-[url('mobile/vertical-mobile-line.svg') h-[94%] mt-[8%] w-full bg-[#C54B38]" />
          </div>

          <div className="relative">
            <img
              className="absolute top-[35%] right-[-23px] z-[999] md:block max-[768px]:hidden"
              src="components/plus.png"
            />
            <div className="relative">
              <img
                className="w-[98%] md:h-[340px] md:min-h-[340px]  max-[768px]:min-h-[200px]"
                src="components/section-2image-3.svg"
              />

              <div className="absolute top-0 right-0 h-full md:block max-[768px]:hidden">
                <img
                  className="h-[380px]"
                  src="components/section-2-right-border.png"
                />
              </div>
            </div>

            <div className="mr-1 md:pt-14 max-[768px]:pt-8">
              <p className="text-4xl font-medium leading-9 text-center font-['Melodrama'] relative bottom-9 max-[768px]:text-2xl">
                Presa
              </p>

              <p className="text-xl font-normal leading-8 font-['Melodrama'] text-center relative bottom-6 max-[768px]:text-xs max-[768px]:bottom-[35px]">
                (1 x 21–28 ounces)
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                className="w-[98%] md:h-[340px] md:min-h-[340px] max-[768px]:min-h-[200px]"
                src="components/section-2-image-4.svg"
              />
            </div>

            <div className="mr-1 md:pt-14 max-[768px]:pt-8">
              <p className="text-4xl font-medium leading-9 text-center font-['Melodrama'] relative bottom-9 max-[768px]:text-2xl">
                Secreto
              </p>

              <p className="text-xl font-normal leading-8 font-['Melodrama'] text-center relative bottom-6 max-[768px]:text-xs max-[768px]:bottom-[35px]">
                (1 x 14–21 ounces)
              </p>
            </div>
          </div>
        </div>

        <div className="grid-rows-1 mt-24 text-center max-[768px]:mt-12">
          <div className="inline-flex">
            <a
              className="bg-[url('components/btn-add-card-bg.svg')] py-4 px-20 text-xl text-[#F2EFE1] md:ml-8 ml-0"
              href=""
            >
              Add To Cart
            </a>

            <a className="ml-3 flex align-middle md:block hidden" href="">
              <img src="components/right-arrow-cart.svg" />
            </a>
          </div>
        </div>

        <div className="grid-rows-1 mt-24 text-center md:mb-16 max-[768px]:p-4">
          <img className="m-auto" src="components/Diagram.svg" />

          <div className="h-24 max-[768px]:hidden">
            <img
              className="m-auto mr-0 relative lg:bottom-[250px]"
              src="components/section-pigs-right.svg"
            />
          </div>
        </div>

        <div className="grid-rows-1 pt-48 relative text-center md:bg-[url('components/bg-food.svg')] bg-no-repeat bg-contain max-[1024px]:bg-cover">
          <div className="absolute md:top-[130px] max-[768px]:top-[-30px]">
            <img
              className="max-[1024px]:w-2/5"
              src="components/image-section-4-left.svg"
            />
          </div>

          <div className="absolute top-[250px] right-0 max-[768px]:hidden">
            <img
              className="max-[1024px]:w-2/5 max-[1024px]:float-right"
              src="components/section-4-right.svg"
            />
          </div>

          <div className="text-6xl font-medium text-center font-['Melodrama'] leading-[4rem] md:px- px-8">
            <div className="md:text-6xl text-4xl">
              <p>What makes Ibérico</p>
              <p>Pork so special?</p>
            </div>

            <p className="md:text-4xl text-2xl font-normal leading-[2.68rem] text-4xl font-normal text-center font-['Gill_Sans'] pt-10 max-w-lg m-auto md:pb-[470px] pb-60">
              <p className="mb-4">
                Those who have savored Ibérico all agree on one thing…
              </p>
              <p className="mb-4">
                They couldn’t believe they were eating pork when they first
                tried it.
              </p>
              The natural umami, tenderness and superior marbling often leaves
              unsuspecting diners wondering if they were really eating pork, or
              a fine Wagyu steak.
            </p>
          </div>
        </div>

        <div className="grid-rows-1 md:mb-24 mb-10 relative p-4">
          <img
            className="absolute left-0 sm:bottom-[140px] lg:bottom-[20px] max-[768px]:bottom-52  max-[768px]:w-2/5"
            src="components/left-section-5.svg"
          />

          <div className="text-6xl font-medium text-center text-[#C54B38] leading-[4rem] max-w-4xl font-['Melodrama'] m-auto max-[768px]:text-4xl">
            THE UNIQUENESS OF IBÉRICO COMES DOWN TO 3 FACTORS
          </div>
        </div>

        <div className="grid-rows-1 container mx-auto">
          <div className="grid lg:grid-cols-3 max-[1024px]:grid-cols-1 gap-3 xl:mx-[200px] max-[768px]:relative">
            <div className="mr-20">
              <div className="flex relative">
                <img
                  className="absolute top-5 md:right-[-60px] max-[768px]:left-52"
                  src="components/arrow-section-right-red.svg"
                />
                <h2 className="bg-[url('components/background-title.svg')] md:text-5xl text-4xl font-medium text-center font-['Melodrama'] leading-[3rem] inline mx-auto no-repeat ml-0">
                  1. Genetics
                </h2>
              </div>

              <p className="pt-5 md:text-xl text-lg font-normal leading-7 text-left font-['Gill_Sans']">
                Ibérico Pork comes from the distinctive Black Iberian Pig – also
                known as “Pata Negra”. It’s actually the same pork whose hind
                legs retail for up to $4,500 in the form of Spain’s world famous
                “Jamón Ibérico”. This rare breed from Spain is bred to contain a
                higher fat content than many other pigs, giving the meat a
                distinctive marbling similar to Kobe and Wagyu beef.
              </p>
            </div>

            <div className="mr-20 max-[768px]:w-full max-[768px]:top-0 max-[768px]:absolute max-[768px]:left-[90%]">
              <div className="flex relative">
                <img
                  className="absolute top-5 md:right-[-60px] max-[768px]:left-52"
                  src="components/arrow-section-right-red.svg"
                />
                <h2 className="bg-[url('components/background-title.svg')] md:text-5xl text-4xl font-medium text-center font-['Melodrama'] leading-[3rem] inline mx-auto no-repeat ml-0">
                  2. Lifestyle
                </h2>
              </div>

              <p className="pt-5 md:text-xl text-lg font-normal leading-7 text-left font-['Gill_Sans']">
                For true Ibérico perfection, the pigs have to be raised in the
                right environment and live a happy life. In fact, Ibérico pigs
                live twice as long as their counterparts. The pigs roam free and
                eat the local all-natural cuisine. They feed for at least two
                seasons to help garner that truly distinct flavor.
              </p>
            </div>

            <div className="mr-20 md:block hidden">
              <div className="flex relative">
                <h2 className="bg-[url('components/background-title.svg')] md:text-5xl text-4xl font-medium text-center font-['Melodrama'] leading-[3rem] inline mx-auto no-repeat ml-0">
                  3. Diet
                </h2>
              </div>

              <p className="pt-5 md:text-xl text-lg font-normal leading-7 text-left font-['Gill_Sans']">
                Campo Grande’s Ibérico pigs are fed a diet of nuts and whole
                grains, which makes for multilayered flavor and incredible
                marbling.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="absolute right-0 md:top-[-180px] max-[768px]:w-3/5 max-[768px]:bottom-2/4 z-[-1]"
            src="components/right-section-5.svg"
          />
        </div>

        <div className="grid-rows-1 xl:mx-[300px] mt-[70px]">
          <img className="" src="components/center-image.svg" />
        </div>

        <img
          className="relative lg:bottom-[150px] hidden md-block"
          src="components/section-5-left-bottom.svg"
        />

        <div className="p-4 grid-rows-1 bg-[url('components/bg-logos.svg')] max-[640px]:bg-[url('mobile/bg-logos-mobile.svg')]  mx-auto md:bg-center bg-no-repeat bg-contain">
          <h2 className="text-orange-700 text-6xl font-medium text-center font-['Melodrama'] leading-[4rem] md:pt-56 pt-10 md:pb-0 pb-4">
            Ibérico Pork is
          </h2>

          <div className="md:hidden grid md-pb-0 pb-48">
            <div className="grid grid-cols-2 mt-4 xl:mx-[300px] mb-8">
              <div className="flex md:justify-center justify-end md:items-center">
                <img
                  className="mr-0 md:mr-0 mr-4"
                  src="mobile/mobile-logo-1.svg"
                />
              </div>
              <div className="flex md:justify-center justify-start md:items-center">
                <img
                  className="md:m-auto md:mr-4 md:ml-0 ml-4"
                  src="mobile/mobile-logo-2.svg"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mt-4 xl:mx-[300px]">
              <div className="flex md:justify-center justify-end md:items-center">
                <img
                  className="mr-0 md:mr-0 mr-4"
                  src="mobile/mobile-logo-3.svg"
                />
              </div>
              <div className="flex md:justify-center justify-center md:items-center">
                <img
                  className="md:m-auto md:mr-4 md:ml-0 ml-4"
                  src="mobile/mobile-logo-4.svg"
                />
              </div>
              <div className="flex md:justify-center justify-start md:items-center">
                <img
                  className="md:m-auto md:mr-4 md:ml-0 ml-4"
                  src="mobile/mobile-logo-5.svg"
                />
              </div>
            </div>
          </div>

          <div className="md:grid hidden grid-cols-4 mt-4 xl:mx-[300px] max-[768px]:hidden">
            <div className="flex justify-center items-center">
              <img className="mr-0" src="components/logo-1.png" />
            </div>
            <div className="flex justify-center items-center">
              <img className="m-auto mr-4" src="components/logo-2.svg" />
            </div>
            <div className="flex justify-center items-center">
              <img className="m-auto ml-4" src="components/logo-3.svg" />
            </div>
            <div className="flex justify-center items-center">
              <img src="components/logo-4.svg" />
            </div>
          </div>

          <div className="md:grid hidden grid-cols-4 mt-4 xl:mx-[390px] mt-20 pb-72">
            <div className="flex justify-center items-center">
              <img src="components/logo-5.svg" />
            </div>
            <div className="flex justify-center items-center">
              <img src="components/logo-6.svg" />
            </div>
            <div className="flex justify-center items-center">
              <img src="components/logo-7.svg" />
            </div>
            <div className="flex justify-center items-center">
              <img src="components/logo-8.svg" />
            </div>
          </div>
        </div>

        <div className="grid-rows-1 xl:mx-[300px] mt-[70px] md:h-[350px] max-[640px]:h-40">
          <img className="" src="components/footer-before.svg" />
        </div>

        <div className="bg-[url('components/footer-bg.svg')] relative">
          <div className="bg-[url('components/footer-back.svg')] max-[768px]:px-4">
            <div className="grid-rows-1 xl:mx-[300px] pt-24">
              <img
                className="m-auto"
                src="components/campo-grande-logo 1.svg"
              />
            </div>

            <div className="grid-rows-1 xl:mx-[300px] pt-12">
              <div className="flex justify-center">
                <a href="">
                  <img className="mr-4" src="components/icon-1-footer.svg" />
                </a>
                <a href="">
                  <img className="mr-4" src="components/icon-2-footer.svg" />
                </a>

                <a href="">
                  <img className="mr-4" src="components/icon-3-footer.svg" />
                </a>

                <a href="">
                  <img className="mr-4" src="components/icon-4-footer.svg" />
                </a>

                <a href="">
                  <img className="mr-4" src="components/icon-5-footer.svg" />
                </a>
              </div>
            </div>

            <div className="grid-rows-1 xl:mx-[600px] pt-12">
              <p className="text-xl font-normal leading-8 text-center font-['Gill_Sans'] text-[#E5D9CF]">
                Hit subscribe for recipes, culinary inspo, and first dibs on new
                products.
              </p>
            </div>

            <div className="grid-rows-1 max-w-[550px] m-auto pt-4 text-center pb-16">
              <div className="flex relative max-[768px]:px-4">
                <input
                  placeholder="Enter your email here"
                  className="bg-[url('components/footer-input-bg.svg')] w-100 py-4 px-3 w-full bg-cover bg-transparent"
                />

                <a href="">
                  <img
                    className="m-auto absolute right-0 top-[8px] md:right-3.5 right-5"
                    src="components/arrow-on-input.svg"
                  />
                </a>
              </div>
            </div>

            <footer className="ab bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-between py-6 lg:px-[150px] max-[768px]:relative max-[768px]:h-24 max-[768px]:bottom-11">
              <a className="text-xl font-normal leading-8 text-left font-['Gill_Sans'] text-[#E5D9CF] opacity-[.35]">
                Campo Grande All Rights Reserved
              </a>
              <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="mr-4 text-xl font-normal leading-8 text-left font-['Gill_Sans'] text-[#E5D9CF] opacity-[.35]"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mr-4 text-xl font-normal leading-8 text-left font-['Gill_Sans'] text-[#E5D9CF] opacity-[.35]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mr-4 text-xl font-normal leading-8 text-left font-['Gill_Sans'] text-[#E5D9CF] opacity-[.35]"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl font-normal leading-8 text-left font-['Gill_Sans'] text-[#E5D9CF] opacity-[.35]"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
