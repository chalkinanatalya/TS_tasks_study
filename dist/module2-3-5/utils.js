"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = exports.isAdmin = void 0;
const isAdmin = (person) => person.type === 'admin';
exports.isAdmin = isAdmin;
const isUser = (person) => person.type === 'user';
exports.isUser = isUser;
