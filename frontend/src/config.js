  const SignupConfig = {
    placeholderTexts: {
        name: "Enter your first name",
        email: "Enter your email",
        phoneNumber: "Enter your phone number",
        password: "Enter your password",
        confirmPassword: "Confirm your password",
    },
    toastMessages: {
        passwordMismatch: "Passwords do not match. Please re-enter them carefully.",
    },
    defaultOtp: 349178,
};

  const ApiConfig = {
    apiUrl: 'http://localhost:8000',
};

  const ForgottenPasswordConfig = {
    placeholders: {
      newPassword: 'Enter your password',
      confirmPassword: 'Re-enter your password',
      otp: 'Enter your OTP here',
    },
    messages: {
      otpMismatch: 'OTP does not match',
      userExists: 'A user with this email already exists. Please sign in.',
      errorVerifyOTP: 'There is some error to verify the OTP',
      passwordsNotMatching: 'Passwords do not match',
      passwordChangedSuccessfully: 'Password changed successfully',
    },
    passwordRequirements: {
      lowercaseLetter: 'One lowercase letter',
      uppercaseLetter: 'One capital uppercase letter',
      number: 'One number',
      minLength: 'Minimum 8 characters',
      specialChar: 'One special char character',
    },
  };

  const OTPConfig = {
  placeholders: {
    otp: 'Enter your OTP here',
  },
  messages: {
    otpMismatch: 'OTP does not match',
    userExists: 'A user with this email already exists. Please sign in.',
    errorVerifyOTP: 'There is some error to verify the OTP',
  },
};

  const SigninConfig = {
    messages: {
      enterCredentials: 'Enter both Email and Password',
      userAlreadyExists: 'A user with this email already exists. Please sign in.',
    },
    placeholders: {
        email: 'Enter your email',
        password: 'Enter your password',
      },
};

const DefaultPictureURL = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';

const ChatFooterConfig = {
    inputPlaceholder: "Type a message",
  };

  const ChatHeaderConfig = {
    defaultImageURL: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png',
    onlineStatus: 'Online',
    offlineStatus: 'Offline',
  };

  const ChatMessageConfig = {
    backgroundUrl: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png',
  };


const EmptyChatConfig = {
    title: 'WhatsApp Web',
    subtitle1: 'Now send and receive messages without keeping your phone online.',
    subtitle2: 'Use WhatsApp on up to 4 linked devices and 1 phone at the same time. ',
    image: 'https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg'
  };
  

export { EmptyChatConfig, ChatMessageConfig, ChatHeaderConfig, ChatFooterConfig, DefaultPictureURL, ApiConfig, ForgottenPasswordConfig, OTPConfig, SigninConfig, SignupConfig };


  

