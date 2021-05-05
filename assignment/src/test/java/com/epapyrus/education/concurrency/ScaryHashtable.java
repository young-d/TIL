//package com.epapyrus.education.concurrency;
//
//import com.epapyrus.common.conc.AtomicHashMap;
//import com.epapyrus.common.lang.Reviseable;
//import org.junit.Test;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.util.ArrayList;
//import java.util.Hashtable;
//import java.util.List;
//import java.util.Map;
//
//public class ScaryHashtable {
//	final static Logger logger = LoggerFactory.getLogger(ScaryHashtable.class);
//
//	Hashtable<Integer, Integer> dangerous = new Hashtable<Integer, Integer>();
//	AtomicHashMap<Integer, Integer> safe = new AtomicHashMap<Integer, Integer>();
//
//	@Test
//	public void testCompare() {
//		_testCompare(10);
//	}
//
//	private void _testCompare(int repeat) {
//		int count = 1000;
//		for(int i = 0 ; i < repeat ; i++) {
//			testHashtable(count);
//			dangerous.clear();
//		}
//		for(int i = 0 ; i < repeat ; i++) {
//			testAtomicHashMap(count);
//			safe.clear();
//		}
//	}
//
//	private void testHashtable(int count) {
//		List<Thread> threads = generateDangerousThreads(dangerous, count);
//		for (Thread t : threads) {
//			t.start();
//		}
//
//		for (Thread t : threads) {
//			try {
//				t.join();
//			} catch (InterruptedException e) {
//				e.printStackTrace();
//			}
//		}
//		logger.debug("hashtable : {}", dangerous);
//	}
//
//	private List<Thread> generateDangerousThreads(final Map<Integer, Integer> map, int count) {
//		List<Thread> threads = new ArrayList<Thread>();
//		for (int i = 0 ; i < count ; i++) {
//			final int j = i;
//			Thread t = new Thread() {
//				@Override
//				public void run() {
//					int binary = j % 2;
//					Integer val = map.get(binary);
//					if (val == null) {
//						val = 0;
//					}
//					val = val+1;
//					map.put(binary, val);
//				}
//			};
//			threads.add(t);
//		}
//		return threads;
//	}
//
//	private void testAtomicHashMap(int count) {
//		List<Thread> threads = generateSafeThreads(safe, count);
//		for (Thread t : threads) {
//			t.start();
//		}
//
//		for (Thread t : threads) {
//			try {
//				t.join();
//			} catch (InterruptedException e) {
//				e.printStackTrace();
//			}
//		}
//		logger.debug("atomicHashMap : {}", safe);
//	}
//
//	private List<Thread> generateSafeThreads(final AtomicHashMap<Integer, Integer> map, int count) {
//		List<Thread> threads = new ArrayList<Thread>();
//		for (int i = 0 ; i < count ; i++) {
//			final int j = i;
//			Thread t = new Thread() {
//				@Override
//				public void run() {
//					final int binary = j % 2;
//
//					map.update(binary, new Reviseable<Integer>() {
//						@Override
//						public Integer revise(Integer source) {
////							logger.debug("source : {}", source);
//							if (source == null) {
//								source = 0;
//							}
//							++source;
////							logger.debug("binary : {}, source : {}", binary, source);
//							return source;
//						}
//					});
//				}
//			};
//			threads.add(t);
//		}
//		return threads;
//	}
//}
