  // useGSAP(() => {
  //   if (isLocationModalOpen) {
  //     gsap.to(locationModalOpenRef.current, {
  //       height: "70%",
  //       paddingTop: 24,
  //     });
  //     gsap.to(locationModalCloseRef.current, {
  //       opacity: 1,
  //     });
  //   } else {
  //     gsap.to(locationModalOpenRef.current, {
  //       height: "0",
  //       paddingTop: 0,
  //       // opacity: 0,
  //     });
  //     gsap.to(locationModalCloseRef.current, {
  //       opacity: 0,
  //     });
  //   }
  // }, [isLocationModalOpen]);

  // useGSAP(() => {
  //   if (locationModal) {
  //     gsap.to(ridesModalRefOpen.current, {
  //       y: 0,
  //     });
  //   } else {
  //     gsap.to(ridesModalRefOpen.current, {
  //       y: "100%",
  //     });
  //   }
  // }, [locationModal]);

  // useGSAP(() => {
  //   if (confirmRideOpen) {
  //     gsap.to(confirmRideModalRef.current, {
  //       transform: "translateY(0)",
  //     });
  //   } else {
  //     gsap.to(confirmRideModalRef.current, {
  //       transform: "translateY(100%)",
  //     });
  //   }
  // }, [confirmRideOpen]);

  // useGSAP(() => {
  //   if (lookingForDriverModalOpen) {
  //     gsap.to(lookingForDriverModalRef.current, {
  //       transform: "translateY(0)",
  //     });
  //   } else {
  //     gsap.to(lookingForDriverModalRef.current, {
  //       transform: "translateY(100%)",
  //     });
  //   }
  // }, [lookingForDriverModalOpen]);