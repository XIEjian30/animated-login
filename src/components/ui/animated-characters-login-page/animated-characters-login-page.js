"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var checkbox_1 = require("@/components/ui/checkbox");
var lucide_react_1 = require("lucide-react");
var Pupil = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 12 : _b, _c = _a.maxDistance, maxDistance = _c === void 0 ? 5 : _c, _d = _a.pupilColor, pupilColor = _d === void 0 ? "black" : _d, forceLookX = _a.forceLookX, forceLookY = _a.forceLookY;
    var _e = (0, react_1.useState)(0), mouseX = _e[0], setMouseX = _e[1];
    var _f = (0, react_1.useState)(0), mouseY = _f[0], setMouseY = _f[1];
    var pupilRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (e) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    var calculatePupilPosition = function () {
        if (!pupilRef.current)
            return { x: 0, y: 0 };
        // If forced look direction is provided, use that instead of mouse tracking
        if (forceLookX !== undefined && forceLookY !== undefined) {
            return { x: forceLookX, y: forceLookY };
        }
        var pupil = pupilRef.current.getBoundingClientRect();
        var pupilCenterX = pupil.left + pupil.width / 2;
        var pupilCenterY = pupil.top + pupil.height / 2;
        var deltaX = mouseX - pupilCenterX;
        var deltaY = mouseY - pupilCenterY;
        var distance = Math.min(Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)), maxDistance);
        var angle = Math.atan2(deltaY, deltaX);
        var x = Math.cos(angle) * distance;
        var y = Math.sin(angle) * distance;
        return { x: x, y: y };
    };
    var pupilPosition = calculatePupilPosition();
    return (<div ref={pupilRef} className="rounded-full" style={{
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
            backgroundColor: pupilColor,
            transform: "translate(".concat(pupilPosition.x, "px, ").concat(pupilPosition.y, "px)"),
            transition: 'transform 0.1s ease-out',
        }}/>);
};
var EyeBall = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.pupilSize, pupilSize = _c === void 0 ? 16 : _c, _d = _a.maxDistance, maxDistance = _d === void 0 ? 10 : _d, _e = _a.eyeColor, eyeColor = _e === void 0 ? "white" : _e, _f = _a.pupilColor, pupilColor = _f === void 0 ? "black" : _f, _g = _a.isBlinking, isBlinking = _g === void 0 ? false : _g, forceLookX = _a.forceLookX, forceLookY = _a.forceLookY;
    var _h = (0, react_1.useState)(0), mouseX = _h[0], setMouseX = _h[1];
    var _j = (0, react_1.useState)(0), mouseY = _j[0], setMouseY = _j[1];
    var eyeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (e) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    var calculatePupilPosition = function () {
        if (!eyeRef.current)
            return { x: 0, y: 0 };
        // If forced look direction is provided, use that instead of mouse tracking
        if (forceLookX !== undefined && forceLookY !== undefined) {
            return { x: forceLookX, y: forceLookY };
        }
        var eye = eyeRef.current.getBoundingClientRect();
        var eyeCenterX = eye.left + eye.width / 2;
        var eyeCenterY = eye.top + eye.height / 2;
        var deltaX = mouseX - eyeCenterX;
        var deltaY = mouseY - eyeCenterY;
        var distance = Math.min(Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)), maxDistance);
        var angle = Math.atan2(deltaY, deltaX);
        var x = Math.cos(angle) * distance;
        var y = Math.sin(angle) * distance;
        return { x: x, y: y };
    };
    var pupilPosition = calculatePupilPosition();
    return (<div ref={eyeRef} className="rounded-full flex items-center justify-center transition-all duration-150" style={{
            width: "".concat(size, "px"),
            height: isBlinking ? '2px' : "".concat(size, "px"),
            backgroundColor: eyeColor,
            overflow: 'hidden',
        }}>
      {!isBlinking && (<div className="rounded-full" style={{
                width: "".concat(pupilSize, "px"),
                height: "".concat(pupilSize, "px"),
                backgroundColor: pupilColor,
                transform: "translate(".concat(pupilPosition.x, "px, ").concat(pupilPosition.y, "px)"),
                transition: 'transform 0.1s ease-out',
            }}/>)}
    </div>);
};
function LoginPage() {
    var _this = this;
    var _a = (0, react_1.useState)(false), showPassword = _a[0], setShowPassword = _a[1];
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setPassword = _c[1];
    var _d = (0, react_1.useState)(""), error = _d[0], setError = _d[1];
    var _e = (0, react_1.useState)(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = (0, react_1.useState)(0), mouseX = _f[0], setMouseX = _f[1];
    var _g = (0, react_1.useState)(0), mouseY = _g[0], setMouseY = _g[1];
    var _h = (0, react_1.useState)(false), isPurpleBlinking = _h[0], setIsPurpleBlinking = _h[1];
    var _j = (0, react_1.useState)(false), isBlackBlinking = _j[0], setIsBlackBlinking = _j[1];
    var _k = (0, react_1.useState)(false), isTyping = _k[0], setIsTyping = _k[1];
    var _l = (0, react_1.useState)(false), isLookingAtEachOther = _l[0], setIsLookingAtEachOther = _l[1];
    var _m = (0, react_1.useState)(false), isPurplePeeking = _m[0], setIsPurplePeeking = _m[1];
    var purpleRef = (0, react_1.useRef)(null);
    var blackRef = (0, react_1.useRef)(null);
    var yellowRef = (0, react_1.useRef)(null);
    var orangeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (e) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () { return window.removeEventListener("mousemove", handleMouseMove); };
    }, []);
    // Blinking effect for purple character
    (0, react_1.useEffect)(function () {
        var getRandomBlinkInterval = function () { return Math.random() * 4000 + 3000; }; // Random between 3-7 seconds
        var scheduleBlink = function () {
            var blinkTimeout = setTimeout(function () {
                setIsPurpleBlinking(true);
                setTimeout(function () {
                    setIsPurpleBlinking(false);
                    scheduleBlink();
                }, 150); // Blink duration 150ms
            }, getRandomBlinkInterval());
            return blinkTimeout;
        };
        var timeout = scheduleBlink();
        return function () { return clearTimeout(timeout); };
    }, []);
    // Blinking effect for black character
    (0, react_1.useEffect)(function () {
        var getRandomBlinkInterval = function () { return Math.random() * 4000 + 3000; }; // Random between 3-7 seconds
        var scheduleBlink = function () {
            var blinkTimeout = setTimeout(function () {
                setIsBlackBlinking(true);
                setTimeout(function () {
                    setIsBlackBlinking(false);
                    scheduleBlink();
                }, 150); // Blink duration 150ms
            }, getRandomBlinkInterval());
            return blinkTimeout;
        };
        var timeout = scheduleBlink();
        return function () { return clearTimeout(timeout); };
    }, []);
    // Looking at each other animation when typing starts
    (0, react_1.useEffect)(function () {
        if (isTyping) {
            setIsLookingAtEachOther(true);
            var timer_1 = setTimeout(function () {
                setIsLookingAtEachOther(false);
            }, 800); // Look at each other for 1.5 seconds, then back to tracking mouse
            return function () { return clearTimeout(timer_1); };
        }
        else {
            setIsLookingAtEachOther(false);
        }
    }, [isTyping]);
    // Purple sneaky peeking animation when typing password and it's visible
    (0, react_1.useEffect)(function () {
        if (password.length > 0 && showPassword) {
            var schedulePeek = function () {
                var peekInterval = setTimeout(function () {
                    setIsPurplePeeking(true);
                    setTimeout(function () {
                        setIsPurplePeeking(false);
                    }, 800); // Peek for 800ms
                }, Math.random() * 3000 + 2000); // Random peek every 2-5 seconds
                return peekInterval;
            };
            var firstPeek_1 = schedulePeek();
            return function () { return clearTimeout(firstPeek_1); };
        }
        else {
            setIsPurplePeeking(false);
        }
    }, [password, showPassword, isPurplePeeking]);
    var calculatePosition = function (ref) {
        if (!ref.current)
            return { faceX: 0, faceY: 0, bodyRotation: 0 };
        var rect = ref.current.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 3; // Focus on head area
        var deltaX = mouseX - centerX;
        var deltaY = mouseY - centerY;
        // Face movement (limited range)
        var faceX = Math.max(-15, Math.min(15, deltaX / 20));
        var faceY = Math.max(-10, Math.min(10, deltaY / 30));
        // Body lean (skew for lean while keeping bottom straight) - negative to lean towards mouse
        var bodySkew = Math.max(-6, Math.min(6, -deltaX / 120));
        return { faceX: faceX, faceY: faceY, bodySkew: bodySkew };
    };
    var purplePos = calculatePosition(purpleRef);
    var blackPos = calculatePosition(blackRef);
    var yellowPos = calculatePosition(yellowRef);
    var orangePos = calculatePosition(orangeRef);
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setError("");
                    setIsLoading(true);
                    // Simulate API delay (quick)
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                case 1:
                    // Simulate API delay (quick)
                    _a.sent();
                    // Mock authentication - validate against dummy credentials
                    if (email === "erik@gmail.com" && password === "1234") {
                        console.log("✅ Login successful!");
                        alert("Login successful! Welcome, Erik!");
                        // In a real app, you would:
                        // - Store auth token
                        // - Redirect to dashboard
                        // - Set user session
                    }
                    else {
                        setError("Invalid email or password. Please try again.");
                        console.log("❌ Login failed");
                    }
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Content Section */}
      <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-primary/90 via-primary to-primary/80 p-12 text-primary-foreground">
        <div className="relative z-20">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <div className="size-8 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
              <lucide_react_1.Sparkles className="size-4"/>
            </div>
            <span>YourBrand</span>
          </div>
        </div>

        <div className="relative z-20 flex items-end justify-center h-[500px]">
          {/* Cartoon Characters */}
          <div className="relative" style={{ width: '550px', height: '400px' }}>
            {/* Purple tall rectangle character - Back layer */}
            <div ref={purpleRef} className="absolute bottom-0 transition-all duration-700 ease-in-out" style={{
            left: '70px',
            width: '180px',
            height: (isTyping || (password.length > 0 && !showPassword)) ? '440px' : '400px',
            backgroundColor: '#6C3FF5',
            borderRadius: '10px 10px 0 0',
            zIndex: 1,
            transform: (password.length > 0 && showPassword)
                ? "skewX(0deg)"
                : (isTyping || (password.length > 0 && !showPassword))
                    ? "skewX(".concat((purplePos.bodySkew || 0) - 12, "deg) translateX(40px)")
                    : "skewX(".concat(purplePos.bodySkew || 0, "deg)"),
            transformOrigin: 'bottom center',
        }}>
              {/* Eyes */}
              <div className="absolute flex gap-8 transition-all duration-700 ease-in-out" style={{
            left: (password.length > 0 && showPassword) ? "".concat(20, "px") : isLookingAtEachOther ? "".concat(55, "px") : "".concat(45 + purplePos.faceX, "px"),
            top: (password.length > 0 && showPassword) ? "".concat(35, "px") : isLookingAtEachOther ? "".concat(65, "px") : "".concat(40 + purplePos.faceY, "px"),
        }}>
                <EyeBall size={18} pupilSize={7} maxDistance={5} eyeColor="white" pupilColor="#2D2D2D" isBlinking={isPurpleBlinking} forceLookX={(password.length > 0 && showPassword) ? (isPurplePeeking ? 4 : -4) : isLookingAtEachOther ? 3 : undefined} forceLookY={(password.length > 0 && showPassword) ? (isPurplePeeking ? 5 : -4) : isLookingAtEachOther ? 4 : undefined}/>
                <EyeBall size={18} pupilSize={7} maxDistance={5} eyeColor="white" pupilColor="#2D2D2D" isBlinking={isPurpleBlinking} forceLookX={(password.length > 0 && showPassword) ? (isPurplePeeking ? 4 : -4) : isLookingAtEachOther ? 3 : undefined} forceLookY={(password.length > 0 && showPassword) ? (isPurplePeeking ? 5 : -4) : isLookingAtEachOther ? 4 : undefined}/>
              </div>
            </div>

            {/* Black tall rectangle character - Middle layer */}
            <div ref={blackRef} className="absolute bottom-0 transition-all duration-700 ease-in-out" style={{
            left: '240px',
            width: '120px',
            height: '310px',
            backgroundColor: '#2D2D2D',
            borderRadius: '8px 8px 0 0',
            zIndex: 2,
            transform: (password.length > 0 && showPassword)
                ? "skewX(0deg)"
                : isLookingAtEachOther
                    ? "skewX(".concat((blackPos.bodySkew || 0) * 1.5 + 10, "deg) translateX(20px)")
                    : (isTyping || (password.length > 0 && !showPassword))
                        ? "skewX(".concat((blackPos.bodySkew || 0) * 1.5, "deg)")
                        : "skewX(".concat(blackPos.bodySkew || 0, "deg)"),
            transformOrigin: 'bottom center',
        }}>
              {/* Eyes */}
              <div className="absolute flex gap-6 transition-all duration-700 ease-in-out" style={{
            left: (password.length > 0 && showPassword) ? "".concat(10, "px") : isLookingAtEachOther ? "".concat(32, "px") : "".concat(26 + blackPos.faceX, "px"),
            top: (password.length > 0 && showPassword) ? "".concat(28, "px") : isLookingAtEachOther ? "".concat(12, "px") : "".concat(32 + blackPos.faceY, "px"),
        }}>
                <EyeBall size={16} pupilSize={6} maxDistance={4} eyeColor="white" pupilColor="#2D2D2D" isBlinking={isBlackBlinking} forceLookX={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? 0 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? -4 : undefined}/>
                <EyeBall size={16} pupilSize={6} maxDistance={4} eyeColor="white" pupilColor="#2D2D2D" isBlinking={isBlackBlinking} forceLookX={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? 0 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? -4 : undefined}/>
              </div>
            </div>

            {/* Orange semi-circle character - Front left */}
            <div ref={orangeRef} className="absolute bottom-0 transition-all duration-700 ease-in-out" style={{
            left: '0px',
            width: '240px',
            height: '200px',
            zIndex: 3,
            backgroundColor: '#FF9B6B',
            borderRadius: '120px 120px 0 0',
            transform: (password.length > 0 && showPassword) ? "skewX(0deg)" : "skewX(".concat(orangePos.bodySkew || 0, "deg)"),
            transformOrigin: 'bottom center',
        }}>
              {/* Eyes - just pupils, no white */}
              <div className="absolute flex gap-8 transition-all duration-200 ease-out" style={{
            left: (password.length > 0 && showPassword) ? "".concat(50, "px") : "".concat(82 + (orangePos.faceX || 0), "px"),
            top: (password.length > 0 && showPassword) ? "".concat(85, "px") : "".concat(90 + (orangePos.faceY || 0), "px"),
        }}>
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined}/>
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined}/>
              </div>
            </div>

            {/* Yellow tall rectangle character - Front right */}
            <div ref={yellowRef} className="absolute bottom-0 transition-all duration-700 ease-in-out" style={{
            left: '310px',
            width: '140px',
            height: '230px',
            backgroundColor: '#E8D754',
            borderRadius: '70px 70px 0 0',
            zIndex: 4,
            transform: (password.length > 0 && showPassword) ? "skewX(0deg)" : "skewX(".concat(yellowPos.bodySkew || 0, "deg)"),
            transformOrigin: 'bottom center',
        }}>
              {/* Eyes - just pupils, no white */}
              <div className="absolute flex gap-6 transition-all duration-200 ease-out" style={{
            left: (password.length > 0 && showPassword) ? "".concat(20, "px") : "".concat(52 + (yellowPos.faceX || 0), "px"),
            top: (password.length > 0 && showPassword) ? "".concat(35, "px") : "".concat(40 + (yellowPos.faceY || 0), "px"),
        }}>
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined}/>
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined}/>
              </div>
              {/* Horizontal line for mouth */}
              <div className="absolute w-20 h-[4px] bg-[#2D2D2D] rounded-full transition-all duration-200 ease-out" style={{
            left: (password.length > 0 && showPassword) ? "".concat(10, "px") : "".concat(40 + (yellowPos.faceX || 0), "px"),
            top: (password.length > 0 && showPassword) ? "".concat(88, "px") : "".concat(88 + (yellowPos.faceY || 0), "px"),
        }}/>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex items-center gap-8 text-sm text-primary-foreground/60">
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"/>
        <div className="absolute top-1/4 right-1/4 size-64 bg-primary-foreground/10 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-1/4 size-96 bg-primary-foreground/5 rounded-full blur-3xl"/>
      </div>

      {/* Right Login Section */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-[420px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 text-lg font-semibold mb-12">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <lucide_react_1.Sparkles className="size-4 text-primary"/>
            </div>
            <span>YourBrand</span>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back!</h1>
            <p className="text-muted-foreground text-sm">Please enter your details</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label_1.Label htmlFor="email" className="text-sm font-medium">Email</label_1.Label>
              <input_1.Input id="email" type="email" placeholder="anna@gmail.com" value={email} autoComplete="off" onChange={function (e) { return setEmail(e.target.value); }} onFocus={function () { return setIsTyping(true); }} onBlur={function () { return setIsTyping(false); }} required className="h-12 bg-background border-border/60 focus:border-primary"/>
            </div>

            <div className="space-y-2">
              <label_1.Label htmlFor="password" className="text-sm font-medium">Password</label_1.Label>
              <div className="relative">
                <input_1.Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={function (e) { return setPassword(e.target.value); }} required className="h-12 pr-10 bg-background border-border/60 focus:border-primary"/>
                <button type="button" onClick={function () { return setShowPassword(!showPassword); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? (<lucide_react_1.EyeOff className="size-5"/>) : (<lucide_react_1.Eye className="size-5"/>)}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <checkbox_1.Checkbox id="remember"/>
                <label_1.Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Remember for 30 days
                </label_1.Label>
              </div>
              <a href="#" className="text-sm text-primary hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            {error && (<div className="p-3 text-sm text-red-400 bg-red-950/20 border border-red-900/30 rounded-lg">
                {error}
              </div>)}

            <button_1.Button type="submit" className="w-full h-12 text-base font-medium" size="lg" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Log in"}
            </button_1.Button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <button_1.Button variant="outline" className="w-full h-12 bg-background border-border/60 hover:bg-accent" type="button">
              <lucide_react_1.Mail className="mr-2 size-5"/>
              Log in with Google
            </button_1.Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-muted-foreground mt-8">
            Don't have an account?{" "}
            <a href="#" className="text-foreground font-medium hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>);
}
exports.Component = LoginPage;
lucide_react_1.Search;
