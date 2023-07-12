'use client'
import SearchBar from "../components/search-bar"
import icon from './images-for-header/header-searchbar-icon.svg'
import { useState, useEffect, useRef } from "react"
import logo from './images-for-header/logo.svg'
import Logo from "../components/logo"
import { Notify } from "notiflix"
import { validateEmail } from "../tools/tools"
import Companies from "./Companies"
import { setTimeout } from "timers"
import Image from "next/image"




export { SearchBar, icon, useState, useEffect, useRef, logo, Logo, Notify, validateEmail, Companies, setTimeout, Image }