"use client";

import { Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="http://github.com/rizwan2610" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="http://linkedin.com/in/rizwan26" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/rizu._26?igsh=eDhjbTVrNHRkbWlr" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-pink-50 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
            <a href="http://bit.ly/42jXbjf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Mohammed Rizwan G
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Mohammed Rizwan G. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}